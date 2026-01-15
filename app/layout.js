import { Inter } from 'next/font/google';
import { Covered_By_Your_Grace } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-covered-grace',
});

export const metadata = {
  title: 'Munir Suri Portfolio Website',
  description:
    'Portfolio website of Munir Suri with 28+ years of experience in consulting, sales, marketing, retail and home improvement sectors',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${coveredByYourGrace.variable} bg-gray-custom`}
      >
        {children}
      </body>
    </html>
  );
}
