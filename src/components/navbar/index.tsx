'use client';
import React from 'react';
import { items } from '@/lib/navbar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CustomButton, Logo } from '@/components';
import useScroll from '@/hooks/useScroll';

function Index() {
 const pathname = usePathname();
 const scroll = useScroll();

 return (
  <nav className={`flex max-w-[1920px] items-center justify-between w-full py-[25px] border-b-[1px] border-b-light-black px-10 3xl:px-navbar fixed ${scroll >= 70 ? 'z-20 bg-bold-black' : 'z-10'}`}>
   <Logo />
   <ul className="z-20 flex items-start justify-end gap-8 w-full text-base">
    {items.map((item, index) => (
     <li className="flex flex-col items-center" key={index}>
      <span className={`w-2 h-2 rounded-full ${pathname === item.link ? 'bg-primary-pink' : 'bg-none'}`} />
      <Link className={`${pathname === item.link ? 'font-medium text-custom-white' : 'font-light text-custom-white/80'}`} href={item.link}>
       {item.label}
      </Link>
     </li>
    ))}
    <CustomButton onClick={() => console.log('connect')} text="Connect" icon="/cube.svg" />
   </ul>
  </nav>
 );
}

export default Index;
