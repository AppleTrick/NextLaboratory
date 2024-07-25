'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { RecoilRoot } from 'recoil';
import SideNav from '@/components/layout-component/sidebar/SideNav';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body className={inter.className}>
          <div className="container">
            <SideNav />
            <div className="wrapper">
              <MantineProvider>{children}</MantineProvider>
            </div>
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
