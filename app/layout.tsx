import type { Metadata } from 'next';
import { Quicksand, Nunito, Amatic_SC } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

const amaticSC = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-amatic',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Home - Women's Voices",
  description:
    "Women's Voices empowers women from refugee, asylum-seeking, migrant, and minoritised communities through wellbeing support, education, advocacy, and leadership development. Based in Longsight, Manchester.",
  openGraph: {
    title: "Women's Voices",
    description: 'Empowering women from diverse communities through education, wellbeing, and leadership. Est. 2013, Manchester.',
    url: 'https://womenvoices.vercel.app',
    siteName: "Women's Voices",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${nunito.variable} ${amaticSC.variable}`}>
      <body className="antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
