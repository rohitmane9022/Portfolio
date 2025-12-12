

import { Sen } from 'next/font/google';
import './globals.css';


const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata = {
  title: 'Rohit Mane | Full Stack Developer',
  description: 'Hey! I’m Rohit, a Full Stack Developer specializing in React, Next.js, and modern web design.',
  keywords: [
    'Rohit Mane', 'Frontend Developer', 'Full Stack Developer', 'React Developer', 'Next.js Developer',
    'Tailwind CSS', 'Portfolio', 'Web Developer', 'Freelancer in Mumbai'
  ],
  authors: [{ name: 'Rohit Mane', url: 'https://rohitmane.space' }],
  creator: 'Rohit Mane',
  metadataBase: new URL('https://rohitmane.space'),
  openGraph: {
    title: 'Rohit Mane | Full Stack Developer',
    description: 'Passionate Frontend Developer building fast and modern web apps with React and Next.js.',
    url: 'https://rohitmane.space',
    siteName: 'Rohit Mane Portfolio',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  );
}
