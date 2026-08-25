'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { EDUCATION, EXPERIENCE, I18N, NAV_ITEMS, PROJECTS, SKILLS, SOCIALS, STRENGTHS, type Lang } from '@/lib/data';
import ContributionGraph from './ContributionGraph';
import CommandPalette from './CommandPalette';

const mono = "'JetBrains Mono', monospace";
const TYPE_INTERVAL_MS = 26;

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeSection, setActiveSection] = useState('about');
  const [typedLen, setTypedLen] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState('');

  const t = I18N[lang];
  const tagline = t.tagline;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Typing animation for the hero tagline — restarts whenever the language changes.
  useEffect(() => {
    setTypedLen(0);
    const id = setInterval(() => {
      setTypedLen((n) => {
        if (n >= tagline.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, TYPE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [tagline]);

  // ⌘K / Ctrl+K toggles the command palette; Escape closes it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyEmail = () => {
    navigator.clipboard
      .writeText(SOCIALS.email)
      .then(() => {
        setCopiedEmail(true);
        if (copyTimeout.current) clearTimeout(copyTimeout.current);
        copyTimeout.current = setTimeout(() => setCopiedEmail(false), 1500);
      })
      .catch(() => {});
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const togglePalette = () => {
    setPaletteOpen((v) => !v);
    setQuery('');
  };

  const openProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setPaletteOpen(false);
  };

  const q = query.trim().toLowerCase();
  const paletteResults = PROJECTS.filter((p) => p.name.toLowerCase().includes(q)).map((p) => ({
    id: p.id,
    name: p.name,
    desc: p.desc[lang],
    url: p.url,
  }));

  return (
    <div className="portfolio-grid">
      <aside className="portfolio-sidebar" style={sidebarStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', textAlign: 'center' }}>
          <Image
            src="/headshot.webp"
            alt={t.name}
            width={84}
            height={84}
            style={{ width: 84, height: 84, borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontFamily: mono, fontSize: 13.5, fontWeight: 600 }}>{t.name}</div>
            <div style={{ fontSize: 11, color: 'var(--foreground-muted)', marginTop: 3, lineHeight: 1.4 }}>{t.role}</div>
            <div style={{ fontSize: 10.5, color: 'var(--foreground-muted)', marginTop: 5 }}>{t.location}</div>
          </div>
        </div>

        <div style={{ display: 'flex', background: 'var(--surface-surface-secondary)', borderRadius: 8, padding: 3, gap: 2 }}>
          <button onClick={() => setLang('en')} style={langButtonStyle(lang === 'en')}>
            EN
          </button>
          <button onClick={() => setLang('th')} style={langButtonStyle(lang === 'th')}>
            TH
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ fontFamily: mono, fontSize: 10.5, color: 'var(--foreground-muted)', marginBottom: 4 }}>
            {`// ${t.sectionsLabel}`}
          </div>
          {NAV_ITEMS.map((nav) => {
            const active = activeSection === nav.id;
            return (
              <div
                key={nav.id}
                onClick={() => scrollToSection(nav.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '7px 10px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontFamily: mono,
                  fontSize: 12,
                  background: active ? 'var(--accent-accent-soft)' : 'transparent',
                  color: active ? 'var(--accent-accent-soft-foreground)' : 'var(--foreground-muted)',
                }}
              >
                {nav.connector} {nav.label}
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div style={{ fontFamily: mono, fontSize: 10.5, color: 'var(--foreground-muted)' }}>{t.socialsLabel}</div>
          <SocialLink href={SOCIALS.github.url} label={SOCIALS.github.label} />
          <SocialLink href={SOCIALS.linkedin.url} label={SOCIALS.linkedin.label} />
          <button onClick={copyEmail} style={socialButtonStyle}>
            <span style={{ color: 'var(--accent-accent)' }}>›</span>
            <span>{copiedEmail ? t.copiedLabel : SOCIALS.email}</span>
          </button>
          <SocialLink href={SOCIALS.instagram.url} label={SOCIALS.instagram.label} />
          <SocialLink href={SOCIALS.facebook.url} label={SOCIALS.facebook.label} />
        </div>

        <a href="/resume.pdf" download="Jetniphan-Pukkham-Resume.pdf" style={resumeButtonStyle}>
          $ curl {t.resumeCmd}
        </a>
      </aside>

      <main style={{ minWidth: 0 }}>
        <section id="about" style={{ padding: '64px 72px 40px', display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 860 }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', background: 'var(--surface-surface)', boxShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'var(--surface-surface-secondary)', borderBottom: '1px solid var(--border)' }}>
              <TrafficDot color="#ff5f56" />
              <TrafficDot color="#ffbd2e" />
              <TrafficDot color="#27c93f" />
              <span style={{ marginLeft: 8, fontFamily: mono, fontSize: 11, color: 'var(--foreground-muted)' }}>
                jaay@portfolio — zsh
              </span>
            </div>
            <div style={{ padding: '26px 26px 32px', fontFamily: mono }}>
              <div style={{ color: 'var(--foreground-muted)', fontSize: 14 }}>{t.heroPrompt}</div>
              <div style={{ fontSize: 19, fontWeight: 600, marginTop: 8, lineHeight: 1.55, minHeight: '2.4em' }}>
                {tagline.slice(0, typedLen)}
                <span className="term-cursor" />
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: mono, fontSize: 11.5, color: 'var(--foreground-muted)', marginBottom: 10 }}>
              {`// 01 · ${t.aboutTitle}`}
            </div>
            <h2 style={{ margin: '0 0 14px', fontSize: 28, fontWeight: 700, letterSpacing: '-0.3px' }}>{t.aboutTitle}</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: 'var(--foreground-muted)' }}>{t.aboutParagraph}</p>
          </div>

          <ContributionGraph title={t.contribTitle} caption={t.contribCaption} />
        </section>

        <section id="experience" style={{ padding: '20px 72px 40px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 860 }}>
          <div style={{ fontFamily: mono, fontSize: 11.5, color: 'var(--foreground-muted)' }}>{`// 02 · ${t.expTitle}`}</div>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: '-0.3px' }}>{t.expTitle}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 20, borderLeft: '2px solid var(--border)' }}>
            {EXPERIENCE.map((job) => (
              <div key={job.id} style={{ position: 'relative', padding: '0 0 32px 20px' }}>
                <span style={timelineDotStyle} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>
                    {job.role} <span style={{ color: 'var(--foreground-muted)', fontWeight: 500 }}>· {job.company}</span>
                  </div>
                  <div style={{ fontFamily: mono, fontSize: 11, color: 'var(--foreground-muted)', whiteSpace: 'nowrap' }}>{job.dates}</div>
                </div>
                <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {job.bullets[lang].map((bullet, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, fontSize: 14.5, lineHeight: 1.6, color: 'var(--foreground-muted)' }}>
                      <span style={{ color: 'var(--accent-accent)', fontFamily: mono }}>›</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" style={{ padding: '20px 72px 40px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 860 }}>
          <div style={{ fontFamily: mono, fontSize: 11.5, color: 'var(--foreground-muted)' }}>{`// 03 · ${t.skillsTitle}`}</div>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: '-0.3px' }}>{t.skillsTitle}</h2>

          <div>
            <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: 'var(--foreground-muted)', marginBottom: 12 }}>
              {t.skillsSubtitle}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
              {SKILLS.map((group) => (
                <div key={group.id} style={skillGroupStyle}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{group.label[lang]}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {group.items.map((item) => (
                      <span key={item} style={tagStyle}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: 'var(--foreground-muted)', marginBottom: 12 }}>
              {t.strengthsSubtitle}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {STRENGTHS[lang].map((s) => (
                <span key={s} style={tagStyle}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="education" style={{ padding: '20px 72px 40px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 860 }}>
          <div style={{ fontFamily: mono, fontSize: 11.5, color: 'var(--foreground-muted)' }}>{`// 04 · ${t.eduTitle}`}</div>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: '-0.3px' }}>{t.eduTitle}</h2>
          {EDUCATION.map((edu) => (
            <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{edu.degree[lang]}</div>
                <div style={{ fontSize: 13.5, color: 'var(--foreground-muted)', marginTop: 3 }}>{edu.school[lang]}</div>
              </div>
              <div style={{ fontFamily: mono, fontSize: 11, color: 'var(--foreground-muted)', whiteSpace: 'nowrap' }}>{edu.dates}</div>
            </div>
          ))}
        </section>

        <section id="projects" style={{ padding: '20px 72px 60px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1080 }}>
          <div style={{ fontFamily: mono, fontSize: 11.5, color: 'var(--foreground-muted)' }}>{`// 05 · ${t.projTitle}`}</div>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: '-0.3px' }}>{t.projTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {PROJECTS.map((proj) => (
              <div key={proj.id} style={projectCardStyle}>
                <div style={{ fontFamily: mono, fontSize: 10.5, color: 'var(--foreground-muted)' }}>~/projects/{proj.id}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                  <div style={{ fontSize: 17, fontWeight: 700 }}>{proj.name}</div>
                  <span style={tagStyle}>{proj.tag}</span>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--foreground-muted)', flex: 1 }}>
                  {proj.desc[lang]}
                </p>
                <a href={proj.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontSize: 12, fontWeight: 600 }}>
                  $ open →
                </a>
              </div>
            ))}
          </div>
        </section>

        <footer style={footerStyle}>
          <div style={{ fontFamily: mono, fontSize: 11, color: 'var(--foreground-muted)' }}>{t.footerNote}</div>
          <div style={{ display: 'flex', gap: 16, fontFamily: mono, fontSize: 11 }}>
            <a href={SOCIALS.github.url} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={SOCIALS.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/resume.pdf" download="Jetniphan-Pukkham-Resume.pdf">{t.resumeLink}</a>
          </div>
        </footer>
      </main>

      <CommandPalette
        open={paletteOpen}
        onToggle={togglePalette}
        query={query}
        onQueryChange={setQuery}
        results={paletteResults}
        onOpenProject={openProject}
        hint={t.paletteHint}
        emptyLabel={t.paletteEmpty}
      />
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
      <span style={{ color: 'var(--accent-accent)' }}>›</span>
      <span>{label}</span>
    </a>
  );
}

function TrafficDot({ color }: { color: string }) {
  return <span style={{ width: 11, height: 11, borderRadius: '50%', background: color, display: 'inline-block' }} />;
}

function langButtonStyle(active: boolean): CSSProperties {
  return {
    border: 'none',
    flex: 1,
    padding: '6px 0',
    borderRadius: 6,
    fontFamily: mono,
    fontSize: 11.5,
    fontWeight: 600,
    cursor: 'pointer',
    background: active ? 'var(--accent-accent)' : 'transparent',
    color: active ? '#fff' : 'var(--foreground-muted)',
  };
}

const sidebarStyle: CSSProperties = {
  position: 'sticky',
  top: 0,
  alignSelf: 'start',
  height: '100vh',
  overflowY: 'auto',
  borderRight: '1px solid var(--border)',
  background: 'var(--surface-surface)',
  padding: '30px 22px',
  display: 'flex',
  flexDirection: 'column',
  gap: 26,
};

const socialLinkStyle: CSSProperties = {
  fontFamily: mono,
  fontSize: 11.5,
  color: 'var(--foreground-muted)',
  display: 'flex',
  gap: 6,
  lineHeight: 1.5,
};

const socialButtonStyle: CSSProperties = {
  ...socialLinkStyle,
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  textAlign: 'left',
};

const resumeButtonStyle: CSSProperties = {
  marginTop: 'auto',
  background: 'var(--accent-accent)',
  color: '#fff',
  textAlign: 'center',
  padding: '11px 14px',
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 12.5,
  fontFamily: mono,
};

const timelineDotStyle: CSSProperties = {
  position: 'absolute',
  left: -26,
  top: 4,
  width: 10,
  height: 10,
  borderRadius: '50%',
  background: 'var(--accent-accent)',
  boxShadow: '0 0 0 4px var(--background-background)',
};

const skillGroupStyle: CSSProperties = {
  border: '1px solid var(--border)',
  borderRadius: 10,
  padding: 14,
  background: 'var(--surface-surface)',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
};

const projectCardStyle: CSSProperties = {
  border: '1px solid var(--border)',
  borderRadius: 12,
  padding: 22,
  background: 'var(--surface-surface)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const tagStyle: CSSProperties = {
  fontSize: 10,
  fontFamily: mono,
  color: 'var(--accent-accent-soft-foreground)',
  background: 'var(--accent-accent-soft)',
  padding: '3px 8px',
  borderRadius: 6,
  whiteSpace: 'nowrap',
};

const footerStyle: CSSProperties = {
  padding: '28px 72px 48px',
  borderTop: '1px solid var(--border)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: 14,
  alignItems: 'center',
};
