'use client';

import type { CSSProperties } from 'react';

const monoFont = "'JetBrains Mono', monospace";

export interface PaletteResult {
  id: string;
  name: string;
  desc: string;
  url: string;
}

interface CommandPaletteProps {
  open: boolean;
  onToggle: () => void;
  query: string;
  onQueryChange: (value: string) => void;
  results: PaletteResult[];
  onOpenProject: (url: string) => void;
  hint: string;
  emptyLabel: string;
}

export default function CommandPalette({
  open,
  onToggle,
  query,
  onQueryChange,
  results,
  onOpenProject,
  hint,
  emptyLabel,
}: CommandPaletteProps) {
  return (
    <>
      <button onClick={onToggle} style={triggerStyle}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span>{hint}</span>
        <span style={kbdStyle}>⌘K</span>
      </button>

      {open && (
        <div onClick={onToggle} style={overlayStyle}>
          <div onClick={(e) => e.stopPropagation()} style={panelStyle}>
            <div style={inputRowStyle}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: 'var(--foreground-muted)' }}>
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder={hint}
                autoFocus
                style={inputStyle}
              />
            </div>
            <div style={resultsStyle}>
              {results.map((proj) => (
                <div key={proj.id} onClick={() => onOpenProject(proj.url)} style={resultItemStyle}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{proj.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--foreground-muted)' }}>{proj.desc}</div>
                </div>
              ))}
              {results.length === 0 && query.trim() && (
                <div style={{ padding: 16, fontSize: 13, color: 'var(--foreground-muted)' }}>{emptyLabel}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const triggerStyle: CSSProperties = {
  position: 'fixed',
  bottom: 24,
  right: 24,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  background: 'var(--surface-surface)',
  border: '1px solid var(--border)',
  borderRadius: 999,
  padding: '10px 16px',
  fontFamily: monoFont,
  fontSize: 12,
  color: 'var(--foreground-muted)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
  cursor: 'pointer',
};

const kbdStyle: CSSProperties = {
  border: '1px solid var(--border)',
  borderRadius: 5,
  padding: '1px 6px',
  fontSize: 10,
};

const overlayStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.6)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: '14vh',
  zIndex: 50,
};

const panelStyle: CSSProperties = {
  width: 520,
  maxWidth: '90vw',
  background: 'var(--surface-surface)',
  border: '1px solid var(--border)',
  borderRadius: 12,
  boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
  overflow: 'hidden',
};

const inputRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '14px 16px',
  borderBottom: '1px solid var(--border)',
};

const inputStyle: CSSProperties = {
  flex: 1,
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'var(--foreground)',
  fontFamily: monoFont,
  fontSize: 14,
};

const resultsStyle: CSSProperties = {
  maxHeight: 300,
  overflowY: 'auto',
  padding: 8,
};

const resultItemStyle: CSSProperties = {
  padding: '12px 12px',
  borderRadius: 8,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};
