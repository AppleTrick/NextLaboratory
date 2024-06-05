'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout-component/navbar/Navbar';
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={inter.className}>
          <div className="container">
            <div className="wrapper">
              <Navbar />
              {children}
            </div>
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
