'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function Ellipses() {
 const pathname = usePathname();

 return (
  <>
   {pathname.includes('/project/') ? (
    <Image className="hidden xl:flex absolute top-0 left-0 right-0 mx-auto opacity-60" src="/project-detail/top-shine.svg" alt="" width={1150} height={1150} />
   ) : pathname === '/tenders' || pathname === '/vote' ? (
    <>
     <Image className="absolute right-0 top-0" src="/ellipse/ellipse-right-shine.svg" alt="" width={1200} height={1200} />
     <Image className="absolute right-0 top-0 -z-10" src="/ellipse/ellipse-right.svg" alt="" width={450} height={450} />
     <Image className="absolute left-[50%] top-[50%] -z-10" style={{ transform: 'translate(-50%, -50%)' }} src="/ellipse/ellipse-center.svg" alt="" width={600} height={600} />
     <Image className="absolute left-0 bottom-[232px] -z-10" src="/ellipse/ellipse-left-shine.svg" alt="" width={600} height={600} />
     <Image className="absolute left-0 bottom-[300px] -z-10" src="/ellipse/ellipse-left.svg" alt="" width={450} height={450} />
    </>
   ) : (
    <></>
   )}
  </>
 );
}

export default Ellipses;
