import { contribCellLevels } from '@/lib/data';

const LEVEL_COLORS = [
  'var(--border)',
  'rgba(4,133,247,0.22)',
  'rgba(4,133,247,0.42)',
  'rgba(4,133,247,0.68)',
  'var(--accent-accent)',
];

interface ContributionGraphProps {
  title: string;
  caption: string;
}

export default function ContributionGraph({ title, caption }: ContributionGraphProps) {
  const levels = contribCellLevels(140);
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
