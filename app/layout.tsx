import { cx } from 'class-variance-authority';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js Starter',
  description: 'Authored by Fabian Bastwöste',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(inter.className, 'antialiased')}>{children}</body>
    </html>
  );
}
