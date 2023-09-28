import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
 return (
  <div className="grid px-0 xl:px-24 grid-cols-3 gap-6">
   <Image className="absolute left-[50%] -top-20 -z-10" style={{ transform: 'translate(-50%, 0%)' }} src="/home/hero/bg-ellipse.svg" alt="" width={1236} height={1236} />
   <Image src="/home/hero/icon1.svg" className="mx-auto my-auto" alt="Icon1" width={225} height={225} />
   <Image src="/home/hero/icon2.svg" className="mx-auto mt-auto" alt="Icon1" width={165} height={165} />
   <Image src="/home/hero/icon3.svg" className="mx-auto my-auto" alt="Icon1" width={210} height={210} />
   <Image className="col-span-full mx-auto" src="/home/hero/home-text.svg" alt="Text" width={958} height={132} />
   <Image src="/home/hero/icon4.svg" className="ml-auto my-auto -mt-10" alt="Icon1" width={225} height={225} />
   <div className="flex flex-col gap-10 justify-between items-center">
    <Link href="/tenders" className="hover:drop-shadow-hover min-w-[170px] rounded-lg bg-primary-pink flex justify-between items-center px-6 py-3">
     <h3 className="text-custom-white text-lg font-light">Start</h3>
     <Image alt="Start Icon" src="/home/hero/start.svg" width={10} height={10} />
    </Link>
    <Image src="/home/hero/icon5.svg" className="mx-auto my-auto" alt="Icon1" width={165} height={165} />
   </div>
   <Image src="/home/hero/icon6.svg" className="mr-auto my-auto -mt-10" alt="Icon1" width={210} height={210} />
   <div className="flex items-center justify-between mx-auto col-span-full gap-5">
    <Image src="/home/hero/scroll-down.svg" alt="Scroll Down" width={43} height={43} />
    <h3 className="text-base font-normal text-[#D9D9D9]">Scroll Down</h3>
   </div>
  </div>
 );
}

export default Hero;
