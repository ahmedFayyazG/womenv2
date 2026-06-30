'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ScrollTop from '@/components/layout/ScrollTop';
import StayConnected from '@/components/layout/StayConnected';
import TopBar from '@/components/layout/TopBar';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalonePage = pathname === '/home-2';

  if (isStandalonePage) {
    return <main id="main-content">{children}</main>;
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <StayConnected />
      <ScrollTop />
    </>
  );
}
