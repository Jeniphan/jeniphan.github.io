export type Lang = 'en' | 'th';

export interface Job {
  id: string;
  company: string;
  role: string;
  dates: string;
  bullets: Record<Lang, string[]>;
}

export interface Project {
  id: string;
  name: string;
  tag: string;
  url: string;
  desc: Record<Lang, string>;
}

export const EXPERIENCE: Job[] = [
  {
    id: 'axons',
    company: 'AXONS',
    role: 'Full Stack Developer',
    dates: 'Aug 2023 – Present',
    bullets: {
      en: [
        'Build and maintain internal platform services in Go and NestJS on a microservice architecture, integrating over AWS SQS and WebSocket for real-time and asynchronous workloads.',
        'Design PostgreSQL and MySQL schemas and the Next.js interfaces on top of them, taking features from spec to release.',
        'Introduced Redis and BullMQ for queued background jobs, moving long-running work off the request path.',
      ],
      th: [
        'พัฒนาและดูแลบริการแพลตฟอร์มภายในองค์กรด้วย Go และ NestJS บนสถาปัตยกรรม microservice เชื่อมต่อผ่าน AWS SQS และ WebSocket สำหรับงานแบบ real-time และ asynchronous',
        'ออกแบบ schema ของ PostgreSQL และ MySQL พร้อมหน้าบ้านด้วย Next.js ดูแลฟีเจอร์ตั้งแต่ spec จนถึง release',
        'นำ Redis และ BullMQ มาใช้จัดคิวงานเบื้องหลัง ลดภาระงานที่ใช้เวลานานออกจาก request path',
      ],
    },
  },
  {
    id: 'logicton',
    company: 'Logicton Co., Ltd.',
    role: 'Full Stack Developer',
    dates: 'Sep 2022 – Present',
    bullets: {
      en: [
        'Deliver logistics tooling across an ASP.NET Core/C# backend and NestJS + Fastify services, with Vue.js front ends on SQL Server.',
        'Own feature delivery end to end, including deployment via Dokploy and Vercel.',
      ],
      th: [
        'พัฒนาเครื่องมือด้านโลจิสติกส์บน backend ASP.NET Core/C# ร่วมกับบริการ NestJS + Fastify และหน้าบ้านด้วย Vue.js บน SQL Server',
        'ดูแลการส่งมอบฟีเจอร์แบบครบวงจร รวมถึงการ deploy ผ่าน Dokploy และ Vercel',
      ],
    },
  },
  {
    id: 'karnkanok',
    company: 'Karnkanok Property',
    role: 'Front-End Developer',
    dates: 'Jun 2022 – Sep 2022',
    bullets: {
      en: ['Designed and built internal web tools in Angular with HTML/SCSS for the property sales team.'],
      th: ['ออกแบบและพัฒนาเครื่องมือเว็บภายในองค์กรด้วย Angular, HTML และ SCSS ให้ทีมขายอสังหาริมทรัพย์'],
    },
  },
  {
    id: 'toyota',
    company: 'Toyota Tsusho Denso Electronics (Thailand)',
    role: 'Software Engineer Intern',
    dates: 'Jun 2021 – Nov 2021',
    bullets: {
      en: ['Built factory-floor desktop tooling with Electron, Angular, NestJS, and MySQL.'],
      th: ['พัฒนาเครื่องมือเดสก์ท็อปสำหรับหน้างานโรงงานด้วย Electron, Angular, NestJS และ MySQL'],
    },
  },
];

export interface SkillGroup {
  id: string;
  label: Record<Lang, string>;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    id: 'languages',
    label: { en: 'Languages', th: 'ภาษาโปรแกรม' },
    items: ['TypeScript', 'Go', 'C#', 'JavaScript', 'SQL', 'C++'],
  },
  {
    id: 'backend',
    label: { en: 'Backend', th: 'Backend' },
    items: ['NestJS', 'Node.js', 'Express', 'Fastify', 'ASP.NET Core', 'Go microservices', 'WebSocket'],
  },
  {
    id: 'frontend',
    label: { en: 'Frontend', th: 'Frontend' },
    items: ['Next.js', 'Angular', 'Vue.js', 'Electron', 'Tailwind', 'SCSS'],
  },
  {
    id: 'data',
    label: { en: 'Data & queues', th: 'Data & Queue' },
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Prisma', 'Redis', 'BullMQ', 'AWS SQS'],
  },
  {
    id: 'platform',
    label: { en: 'Platform', th: 'Platform' },
    items: ['Dokploy', 'Vercel', 'Docker', 'CI/CD'],
  },
  {
    id: 'architecture',
    label: { en: 'Architecture', th: 'สถาปัตยกรรม' },
    items: ['Microservices', 'Hexagonal', 'DDD', 'TDD', 'Feature-Sliced Design', 'SDLC'],
  },
  {
    id: 'ai-tooling',
    label: { en: 'AI tooling', th: 'AI Tooling' },
    items: ['Claude Code', 'Codex', 'sub-agents', 'custom agents & skills'],
  },
];

export interface EducationEntry {
  id: string;
  degree: Record<Lang, string>;
  school: Record<Lang, string>;
  dates: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    id: 'kmutt',
    degree: {
      en: 'B.Eng. Electronic & Telecommunication Engineering',
      th: 'วิศวกรรมศาสตรบัณฑิต สาขาอิเล็กทรอนิกส์และโทรคมนาคม',
    },
    school: {
      en: "King Mongkut's University of Technology Thonburi (KMUTT)",
      th: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)',
    },
    dates: '2018 – 2022',
  },
];

export const STRENGTHS: Record<Lang, string[]> = {
  en: ['Technical leadership', 'Complex problem solving', 'Cross-team communication', 'Adaptability'],
  th: ['ภาวะผู้นำด้านเทคนิค', 'การแก้ปัญหาที่ซับซ้อน', 'การสื่อสารข้ามทีม', 'ความยืดหยุ่นในการปรับตัว'],
};

export const PROJECTS: Project[] = [
  {
    id: 'tunderpos',
    name: 'TunderPOS',
    tag: 'tunderpos.com',
    url: 'https://tunderpos.com',
    desc: {
      en: 'Point-of-sale platform for restaurants, cafés, and grocery stores — online ordering, LINE LIFF membership, stock control, and staff management. Full owner of architecture, delivery, and hosting.',
      th: 'แพลตฟอร์ม POS สำหรับร้านอาหาร คาเฟ่ และร้านขายของชำ ครอบคลุมสั่งอาหารออนไลน์ ระบบสมาชิกผ่าน LINE LIFF ควบคุมสต็อก และจัดการพนักงาน ดูแลเองทั้งสถาปัตยกรรม การพัฒนา และ hosting',
    },
  },
  {
    id: 'tundercoach',
    name: 'TunderCoach AI',
    tag: 'LINE',
    url: 'https://lin.ee/TiFdzC9',
    desc: {
      en: 'AI running coach that generates individual training plans toward a goal, reviews each session and weekly progress, and adapts the plan. Integrated with Strava.',
      th: 'โค้ชวิ่งด้วย AI ที่สร้างแผนฝึกซ้อมเฉพาะบุคคลตามเป้าหมาย รีวิวผลแต่ละเซสชันและความคืบหน้ารายสัปดาห์ พร้อมปรับแผนอัตโนมัติ เชื่อมต่อกับ Strava',
    },
  },
  {
    id: 'babybeat',
    name: 'BabyBeat',
    tag: 'LINE',
    url: 'https://lin.ee/qyQfwrk',
    desc: {
      en: 'Newborn-care assistant bot that logs feeding, sleep, and diaper events and turns them into a summary parents can bring to a paediatrician.',
      th: 'บอทผู้ช่วยดูแลทารกแรกเกิด บันทึกการให้นม การนอน และการเปลี่ยนผ้าอ้อม แล้วสรุปออกมาให้พ่อแม่นำไปพบกุมารแพทย์ได้ง่ายขึ้น',
    },
  },
];

export const SOCIALS = {
  github: { label: 'github.com/Jeniphan', url: 'https://github.com/Jeniphan' },
  linkedin: { label: 'linkedin.com/in/jetniphan', url: 'https://linkedin.com/in/jetniphan-pukkham-a6831842a' },
  instagram: { label: 'instagram.com/jaay__ni', url: 'https://instagram.com/jaay__ni' },
  facebook: { label: 'facebook.com/jaay', url: 'https://facebook.com/share/1EdGxCazpi' },
  email: 'jeni.pukkham@gmail.com',
};

export const I18N = {
  en: {
    name: 'jetniphan.pukkham',
    role: 'Senior Full Stack Developer',
    location: 'Chiang Mai, Thailand',
    sectionsLabel: 'sections',
    heroPrompt: '$ whoami',
    tagline:
      'Full-stack engineer shipping enterprise platforms by day, building products of my own by night.',
    aboutTitle: 'About',
    aboutParagraph:
      'Full-stack engineer with 4+ years building production systems across agriculture, logistics, and property tech — from Go and NestJS microservices to Next.js and Angular front ends. Comfortable owning a feature end to end: data model, queue-driven background work, API, UI, and deployment. Currently shipping enterprise tooling at AXONS while running three products of my own in the wild.',
    contribTitle: '$ git log --stat --since=1y',
    contribCaption: 'Last 140 days · github.com/Jeniphan',
    expTitle: 'Experience',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technical skills',
    strengthsSubtitle: 'Strengths',
    eduTitle: 'Education',
    projTitle: 'Projects',
    resumeCmd: 'resume.pdf',
    resumeLink: 'Résumé',
    footerNote: 'Built with Next.js · static export for GitHub Pages',
    paletteHint: 'Search projects',
    paletteEmpty: 'No projects match',
    copiedLabel: 'copied to clipboard',
    socialsLabel: '$ ls socials/',
  },
  th: {
    name: 'jetniphan.pukkham',
    role: 'Senior Full Stack Developer',
    location: 'เชียงใหม่ ประเทศไทย',
    sectionsLabel: 'หมวดหมู่',
    heroPrompt: '$ whoami',
    tagline: 'วิศวกร Full-Stack ที่ดูแลระบบระดับองค์กรในเวลางาน และสร้างโปรดักต์ของตัวเองในเวลาว่าง',
    aboutTitle: 'เกี่ยวกับ',
    aboutParagraph:
      'วิศวกร Full-Stack ที่มีประสบการณ์กว่า 4 ปีในการสร้างระบบที่ใช้งานจริงในหลายอุตสาหกรรม ทั้งเกษตร โลจิสติกส์ และอสังหาริมทรัพย์ — ตั้งแต่ microservices ด้วย Go และ NestJS ไปจนถึงหน้าบ้านด้วย Next.js และ Angular ถนัดดูแลฟีเจอร์แบบครบวงจร ตั้งแต่ data model งานเบื้องหลังแบบ queue-driven, API, UI ไปจนถึงการ deploy ปัจจุบันดูแลระบบระดับองค์กรที่ AXONS พร้อมกับพัฒนาโปรดักต์ของตัวเองอีก 3 ตัวควบคู่กันไป',
    contribTitle: '$ git log --stat --since=1y',
    contribCaption: '140 วันล่าสุด · github.com/Jeniphan',
    expTitle: 'ประสบการณ์',
    skillsTitle: 'ทักษะ',
    skillsSubtitle: 'ทักษะด้านเทคนิค',
    strengthsSubtitle: 'จุดแข็ง',
    eduTitle: 'การศึกษา',
    projTitle: 'โปรเจกต์',
    resumeCmd: 'resume.pdf',
    resumeLink: 'เรซูเม่',
    footerNote: 'สร้างด้วย Next.js · static export สำหรับ GitHub Pages',
    paletteHint: 'ค้นหาโปรเจกต์',
    paletteEmpty: 'ไม่พบโปรเจกต์ที่ตรงกัน',
    copiedLabel: 'คัดลอกแล้ว',
    socialsLabel: '$ ls socials/',
  },
} satisfies Record<Lang, Record<string, string>>;

export const NAV_ITEMS: { id: string; label: string; connector: string }[] = [
  { id: 'about', label: 'about.tsx', connector: '├─' },
  { id: 'experience', label: 'experience.tsx', connector: '├─' },
  { id: 'skills', label: 'skills.tsx', connector: '├─' },
  { id: 'education', label: 'education.tsx', connector: '├─' },
  { id: 'projects', label: 'projects.tsx', connector: '└─' },
];

// Deterministic pseudo-random contribution-graph cells (same generator as the
// design prototype) so the placeholder graph looks the same on every render.
export function contribCellLevels(count = 140): number[] {
  const levels: number[] = [];
  for (let i = 0; i < count; i++) {
    const frac = Math.abs(Math.sin(i * 12.9898)) % 1;
    levels.push(Math.floor(frac * 5));
  }
  return levels;
}
