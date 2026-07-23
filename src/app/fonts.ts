import { Nunito, Quicksand } from 'next/font/google';

// Body: rounded, highly readable
export const body = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

// Display: soft, rounded headings + name
export const display = Quicksand({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});
