

import { Sen } from 'next/font/google';
import './globals.css';


const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata = {
  title: 'Rohit Mane | Frontend Developer',
  description: 'Hey! I’m Rohit, a Frontend Developer specializing in React, Next.js, and modern web design.',
  keywords: [
    'Rohit Mane', 'Frontend Developer', 'React Developer', 'Next.js Developer',
    'Tailwind CSS', 'Portfolio', 'Web Developer', 'Freelancer in Mumbai'
  ],
  authors: [{ name: 'Rohit Mane', url: 'https://rohitmane.vercel.app' }],
  creator: 'Rohit Mane',
  metadataBase: new URL('https://rohitmane.vercel.app'),
  openGraph: {
    title: 'Rohit Mane | Frontend Developer',
    description: 'Passionate Frontend Developer building fast and modern web apps with React and Next.js.',
    url: 'https://rohitmane.vercel.app',
    siteName: 'Rohit Mane Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  );
}
