import './globals.css';
import { body, display } from './fonts';
import Providers from './components/providers';
import Nav from './components/nav';
import Footer from './components/footer';
import ThemeToggle from './components/theme-toggle';
import { profile } from '@/data/content';
import Link from 'next/link';

export const metadata = {
  title: 'Jumana Fathima',
  description:
    'Jumana Fathima — data scientist & bookworm in Seattle. Writing, experience, and things I’m curious about.',
  openGraph: {
    title: 'Jumana Fathima',
    description: 'Data scientist & bookworm in Seattle.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} ${display.variable}`}>
      <body className="font-sans">
        <Providers>
          <div className="mx-auto flex min-h-screen max-w-content flex-col px-5 py-10 sm:px-6 sm:py-16">
            <header className="mb-12">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link
                    href="/"
                    className="font-display text-2xl font-bold tracking-tight text-fg transition-colors hover:text-accent"
                  >
                    {profile.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{profile.tagline}</p>
                </div>
                <ThemeToggle />
              </div>
              <div className="mt-6">
                <Nav />
              </div>
            </header>

            <main className="flex-1 animate-fade-up">{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
