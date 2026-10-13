// Build-time: merge per-day contribution counts from GitLab + GitHub into
// public/contributions.json. Browsers can't call GitLab's calendar.json (no CORS),
// so we fetch it here and ship a static file. Fail-soft: on any error no file is
// written and the UI falls back to its placeholder pattern.
import { mkdir, writeFile } from 'node:fs/promises';

const GITLAB_USER = 'Jeniphan';
const GITHUB_USER = 'Jeniphan';
const WEEKS = 53; // columns, Sunday-first, ending with the current week
const OUT = new URL('../public/contributions.json', import.meta.url);

const iso = (d) => d.toISOString().slice(0, 10);

async function getJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.json();
}

async function gitlab() {
  return getJson(`https://gitlab.com/users/${GITLAB_USER}/calendar.json`); // { 'YYYY-MM-DD': n }
}

async function github() {
  const data = await getJson(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`);
  return Object.fromEntries(data.contributions.map((c) => [c.date, c.count]));
}

// GitHub-style levels: 0 = none, 1-4 = quartiles of the non-zero days.
function toLevels(counts) {
  const nonZero = counts.filter((n) => n > 0).sort((a, b) => a - b);
  if (!nonZero.length) return counts.map(() => 0);
  const q = (p) => nonZero[Math.min(nonZero.length - 1, Math.floor(p * nonZero.length))];
  const [t1, t2, t3] = [q(0.25), q(0.5), q(0.75)];
  return counts.map((n) => (n === 0 ? 0 : n <= t1 ? 1 : n <= t2 ? 2 : n <= t3 ? 3 : 4));
}

const results = await Promise.allSettled([gitlab(), github()]);
const sources = results.filter((r) => r.status === 'fulfilled').map((r) => r.value);
results.forEach((r) => r.status === 'rejected' && console.warn('contributions:', r.reason.message));

if (!sources.length) {
  console.warn('contributions: all sources failed, skipping');
  process.exit(0);
}

const now = new Date();
const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
const start = new Date(today);
start.setUTCDate(start.getUTCDate() - today.getUTCDay() - (WEEKS - 1) * 7); // Sunday of the first column

const dates = [];
for (const d = new Date(start); d <= today; d.setUTCDate(d.getUTCDate() + 1)) dates.push(iso(d));
const counts = dates.map((date) => sources.reduce((sum, s) => sum + (s[date] ?? 0), 0));
const levels = toLevels(counts);
const days = dates.map((date, i) => ({ date, count: counts[i], level: levels[i] }));

await mkdir(new URL('.', OUT), { recursive: true });
await writeFile(OUT, JSON.stringify({ generatedAt: now.toISOString(), days }));
console.log(`contributions: ${sources.length}/2 sources, ${counts.filter(Boolean).length}/${days.length} active days`);
