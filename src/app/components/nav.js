'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'About', href: '/' },
  { label: 'Writing', href: '/writing' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 rounded-full border border-border bg-surface p-1">
      {tabs.map((tab) => {
        const active =
          tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              active
                ? 'bg-accent-soft text-accent'
                : 'text-muted hover:text-fg'
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
