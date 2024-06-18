'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout-component/navbar/Navbar';
import { RecoilRoot } from 'recoil';
import SideNav from '@/components/layout-component/sidebar/SideNav';

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
          <SideNav />
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
