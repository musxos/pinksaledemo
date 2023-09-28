'use client';
import React from 'react';
import { Footer, Navbar } from '@/components';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function GlobalLayout({ children }: { children: React.ReactNode }) {
 return (
  <div className="flex min-h-screen max-w-[1920px] overflow-hidden mx-auto flex-col w-full relative gap-16 justify-between">
   <Navbar />
   <div className="flex flex-col mt-[160px] justify-center h-full 3xl:justify-start 3xl:h-auto">{children}</div>
   <Footer />
  </div>
 );
}

export default GlobalLayout;
