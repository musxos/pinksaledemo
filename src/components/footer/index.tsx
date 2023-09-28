import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { items } from '@/lib/navbar';
import { Logo } from '@/components';

const currentYear = new Date().getFullYear();

function Index() {
 return (
  <footer className="min-h-[232px] h-full 3xl:max-h-[232px] gap-6 grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 md:content-center w-full py-[25px] border-t-[1px] bg-bold-black px-10 3xl:px-navbar border-light-black">
   <div className="flex flex-col md:items-start items-center justify-center gap-2">
    <Logo />
    <span className="text-second-black text-normal text-base">© {currentYear} ChainMasterTR</span>
   </div>
   <div className="flex items-start xl:justify-center justify-end gap-14">
    <div className="flex flex-col items-center">
     <span className="text-white text-normal text-base mb-3">ChainMasterTR</span>
     <Link href="#" className="text-second-black text-normal text-base">
      FAQs
     </Link>
     <Link href="#" className="text-second-black text-normal text-base">
      Github
     </Link>
     <Link href="#" className="text-second-black text-normal text-base">
      Docs
     </Link>
     <Link href="#" className="text-second-black text-normal text-base">
      Support
     </Link>
    </div>
    <div className="flex flex-col items-center">
     <span className="text-white text-normal text-base mb-3">Speed Menu</span>
     {items.map((item, index) => (
      <Link key={index} href={item.link} className="text-second-black text-normal text-base">
       {item.label}
      </Link>
     ))}
     <button className="text-second-black text-normal text-base">Connect</button>
    </div>
   </div>
   <div className="md:col-span-3 xl:col-span-1 flex flex-col items-center xl:items-end justify-center gap-3">
    <div className="flex items-center gap-2">
     <Image src="/footer/bell.svg" alt="Logo" width="25" height="25" className="" />
     <span className="text-white leading-5 font-normal text-base">Get the latest ChainMasterTR updates</span>
    </div>
    <div className="relative bg-input flex items-center justify-between px-4 gap-2 py-2 min-w-[260px] border-[1px] border-light-black rounded-lg">
     <input type="text" className="h-full w-full outline-0 text-base text-second-black" placeholder="Your email" />
     <Image className="absolute -right-3" src={`/footer/subscribe.svg`} alt="Search.." width={75} height={75} />
    </div>
    <div className="flex justify-end gap-6 items-center">
     <Link href="#">
      <Image src="/footer/instagram.svg" alt="" width={38} height={38}></Image>{' '}
     </Link>
     <Link href="#">
      <Image src="/footer/twitter.svg" alt="" width={38} height={38}></Image>{' '}
     </Link>
     <Link href="#">
      <Image src="/footer/facebook.svg" alt="" width={38} height={38}></Image>{' '}
     </Link>
    </div>
   </div>
  </footer>
 );
}

export default Index;
