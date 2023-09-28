import React from 'react';
import Image from 'next/image';

interface PropTypes {
 icon: string;
 title: string;
 description: string;
}

function Hero({ icon, description, title }: PropTypes) {
 return (
  <div className="flex items-center justify-start gap-20 px-10 xl:px-[280px] 3xl:px-[400px]">
   <div className="flex items-center gap-2">
    <Image src={icon} alt="icon" width={20} height={20} />
    <h3 className="text-2xl font-medium text-custom-white">{title}</h3>
   </div>
   <div className="h-full w-[1px] bg-light-black" />
   <h3 className="leading-5 text-base text-second-white">{description}</h3>
  </div>
 );
}

export default Hero;
