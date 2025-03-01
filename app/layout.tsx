import { Nunito } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/shared/header';


const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Next Pizza | Главная'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}>
        <main className='min-h-screen'>
          <Header/>
        {children}
        </main>
      
      </body>
    </html>
  );
}