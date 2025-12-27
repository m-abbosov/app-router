import { Roboto, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Providers from '../../providers';

const RobotFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const InterFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Nextjs 2-dars',
  description: 'Bu nextjs 2-dars',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RobotFont.className} ${InterFont.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
