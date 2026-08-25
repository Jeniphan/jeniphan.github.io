import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jetniphan Pukkham — Senior Full Stack Developer',
  description:
    'Full-stack engineer with 4+ years building production systems across agriculture, logistics, and property tech — from Go and NestJS microservices to Next.js and Angular front ends.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout applies site-wide, not per-page */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
