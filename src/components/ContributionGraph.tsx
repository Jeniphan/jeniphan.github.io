'use client';

import { useEffect, useState } from 'react';
import { contribCellLevels } from '@/lib/data';

const LEVEL_COLORS = [
  'var(--border)',
  'rgba(4,133,247,0.22)',
  'rgba(4,133,247,0.42)',
  'rgba(4,133,247,0.68)',
  'var(--accent-accent)',
];

const WEEKS = 53;
const CACHE_KEY = 'contrib-days';
const CACHE_TTL_MS = 60 * 60 * 1000;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ROW_LABELS: Record<number, string> = { 1: 'M', 3: 'W', 5: 'F' }; // Sunday-first rows
const mono = "'JetBrains Mono', monospace";

interface Day {
  date: string;
  count: number;
  level: number;
}

// Generated at build time by scripts/fetch-contributions.mjs (GitLab + GitHub merged).
async function fetchDays(): Promise<Day[]> {
  const cached = sessionStorage.getItem(CACHE_KEY);
  if (cached) {
    const { days, fetchedAt } = JSON.parse(cached) as { days: Day[]; fetchedAt: number };
    if (Date.now() - fetchedAt < CACHE_TTL_MS) return days;
  }

  const res = await fetch('/contributions.json');
  if (!res.ok) throw new Error(`contributions request failed: ${res.status}`);
  const { days } = (await res.json()) as { days: Day[] };

  sessionStorage.setItem(CACHE_KEY, JSON.stringify({ days, fetchedAt: Date.now() }));
  return days;
}

// One label per month, placed on the first column whose first day falls in that month.
function monthLabels(days: Day[]): { col: number; label: string }[] {
  const labels: { col: number; label: string }[] = [];
  let last = -1;
  for (let col = 0; col * 7 < days.length; col++) {
    const month = Number(days[col * 7].date.slice(5, 7)) - 1;
    if (month !== last) {
      // Skip a label that would crowd the previous one at the left edge.
      if (!(col === 0 && days[0].date.slice(8, 10) > '20')) labels.push({ col, label: MONTHS[month] });
      last = month;
    }
  }
  return labels;
}

interface ContributionGraphProps {
  title: string;
  caption: string;
}

export default function ContributionGraph({ title, caption }: ContributionGraphProps) {
  const [days, setDays] = useState<Day[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchDays()
      .then((live) => {
        if (!cancelled && live.length) setDays(live);
      })
      .catch(() => {
        // Keep the placeholder pattern if the data file is missing.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Placeholder is date-free so server and client render identically.
  const placeholder = days ? null : contribCellLevels(WEEKS * 7);
  const cellCount = days ? days.length : WEEKS * 7;
  const labels = days ? monthLabels(days) : [];

  return (
    <div
      style={{
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '20px 22px',
        background: 'var(--surface-surface)',
      }}
    >
      <div style={{ fontFamily: mono, fontSize: 11.5, color: 'var(--foreground-muted)', marginBottom: 14 }}>{title}</div>

      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: 620, display: 'grid', gridTemplateColumns: '14px 1fr', columnGap: 8 }}>
          <div />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${WEEKS}, 1fr)`,
              columnGap: 3,
              height: 16,
              fontSize: 11,
              color: 'var(--foreground-muted)',
            }}
          >
            {labels.map(({ col, label }) => (
              <span key={col} style={{ gridColumn: `${col + 1} / span 3`, whiteSpace: 'nowrap' }}>
                {label}
              </span>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(7, 1fr)',
              rowGap: 3,
              fontSize: 11,
              color: 'var(--foreground-muted)',
              alignItems: 'center',
            }}
          >
            {Array.from({ length: 7 }, (_, row) => (
              <span key={row}>{ROW_LABELS[row] ?? ''}</span>
            ))}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(7, auto)',
              gridTemplateColumns: `repeat(${WEEKS}, 1fr)`,
              gridAutoFlow: 'column',
              gap: 3,
            }}
          >
            {Array.from({ length: cellCount }, (_, i) => {
              const day = days?.[i];
              const level = day ? day.level : placeholder![i];
              return (
                <div
                  key={i}
                  title={day ? `${day.count} contributions on ${day.date}` : undefined}
                  style={{ width: '100%', aspectRatio: '1', borderRadius: 2, background: LEVEL_COLORS[level] }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 14,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
          fontSize: 11,
          color: 'var(--foreground-muted)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <span style={{ marginRight: 4 }}>Less</span>
          {LEVEL_COLORS.map((color, i) => (
            <div key={i} style={{ width: 11, height: 11, borderRadius: 2, background: color }} />
          ))}
          <span style={{ marginLeft: 4 }}>More</span>
        </div>
        <div>{caption}</div>
      </div>
    </div>
  );
}
