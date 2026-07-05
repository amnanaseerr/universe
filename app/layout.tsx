import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UniVerse - Campus Marketplace',
  description: 'Buy, sell, learn and connect on campus.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0F0B1E]">{children}</body>
    </html>
  );
}