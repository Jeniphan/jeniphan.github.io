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

const CELL_COUNT = 140;
const GITHUB_USERNAME = 'Jeniphan';
const CACHE_KEY = `gh-contrib-${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 60 * 60 * 1000;

interface ContributionDay {
  date: string;
  level: number;
}

async function fetchContributionLevels(): Promise<number[]> {
  const cached = sessionStorage.getItem(CACHE_KEY);
  if (cached) {
    const { levels, fetchedAt } = JSON.parse(cached) as { levels: number[]; fetchedAt: number };
    if (Date.now() - fetchedAt < CACHE_TTL_MS) return levels;
  }

  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`);
  if (!res.ok) throw new Error(`GitHub contributions request failed: ${res.status}`);
  const data = (await res.json()) as { contributions: ContributionDay[] };
  const levels = data.contributions.slice(-CELL_COUNT).map((day) => day.level);

  sessionStorage.setItem(CACHE_KEY, JSON.stringify({ levels, fetchedAt: Date.now() }));
  return levels;
}

interface ContributionGraphProps {
  title: string;
  caption: string;
}

export default function ContributionGraph({ title, caption }: ContributionGraphProps) {
  const [levels, setLevels] = useState<number[]>(() => contribCellLevels(CELL_COUNT));

  useEffect(() => {
    let cancelled = false;
    fetchContributionLevels()
      .then((live) => {
        if (!cancelled && live.length === CELL_COUNT) setLevels(live);
      })
      .catch(() => {
        // Keep the placeholder pattern if the live fetch fails.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      style={{
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '20px 22px',
        background: 'var(--surface-surface)',
      }}
    >
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: 'var(--foreground-muted)', marginBottom: 14 }}>
        {title}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)', gap: 3, maxWidth: 420 }}>
        {levels.map((level, i) => (
          <div
            key={i}
            style={{ width: '100%', aspectRatio: '1', borderRadius: 2, background: LEVEL_COLORS[level] }}
          />
        ))}
      </div>
      <div style={{ marginTop: 12, fontSize: 11, color: 'var(--foreground-muted)' }}>{caption}</div>
    </div>
  );
}
