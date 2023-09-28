'use client';
import React, { Fragment, useState } from 'react';
import { IProject } from '@/lib/project';
import currencyFormat from '@/helpers/currencyFormat';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface IPropTypes {
 project: IProject;
}

const items = [
 {
  label: 'Total Raise',
  value: 'totalRaise',
  valueGetter: (value: number) => currencyFormat(value),
 },
 {
  label: 'Price',
  value: 'price',
 },
 {
  label: 'Vesting',
  value: 'vesting',
 },
 {
  label: 'Chain',
  value: 'chainLogo',
  valueGetter: (imgUrl: string) => <Image src={imgUrl} alt="Chain Logo" width={20} height={20} />,
 },
 {
  label: 'Type',
  value: 'type',
 },
 {
  label: 'Hard Cap',
  value: 'hardCap',
  valueGetter: (value: number) => currencyFormat(value),
 },
 {
  label: 'Soft Cap',
  value: 'softCap',
  valueGetter: (value: number) => currencyFormat(value),
 },
];

const docs = [
 {
  label: 'WhitePaper',
  value: 'whitepaper',
 },
 {
  label: 'PitchDeck',
  value: 'pitchDeck',
 },
 {
  label: 'Tokenomics',
  value: 'tokenomics',
 },
];

function Hero({ project }: IPropTypes) {
 const router = useRouter();
 const [selectedDocIndex, setSelectedDocIndex] = useState(0);

 return (
  <div className="flex flex-col gap-10 px-10 xl:px-[320px] 3xl:px-navbar">
   <div className="grid grid-cols-7 3xl:grid-cols-13 content-center gap-2 3xl:gap-5">
    {items.map((item, index) => (
     <Fragment key={index}>
      <div className="flex flex-col items-center justify-center">
       <span className="text-[#5E637C] font-normal text-base">{item.label}</span>
       <span className="text-custom-white font-normal text-base">
        {/*@ts-ignore*/}
        {item.valueGetter ? item.valueGetter(project[item.value]) : project[item.value]}
       </span>
      </div>
      {index !== items.length - 1 && <span className={`hidden mx-auto my-auto 3xl:block w-[5px] h-[5px] rounded-full bg-primary-pink`} />}
     </Fragment>
    ))}
   </div>
   <div className="mx-auto flex flex-col gap-4 justify-center items-center z-10">
    <h3 className="text-custom-white font-normal text-2xl">{project.title}</h3>
    <Link href="#" className="border-[1px] border-[#3E1644] px-10 rounded-xl py-1 text-[#794582] font-normal text-base">
     www.project.com
    </Link>
    <Image src="/project-logo.svg" className="border-primary-pink border-[1px] rounded-full" alt="" width={112} height={112} />
   </div>
   <div className="mx-auto w-full grid grid-cols-1 3xl:grid-cols-3 gap-6 z-10 -mt-4">
    <Image src="/project-detail/back.svg" alt="Back" className="cursor-pointer mx-auto 3xl:mx-0" width={110} height={23} onClick={() => router.back()} />
    <div className="mx-auto flex mb-3 items-center gap-5 ">
     {docs.map((doc, i) => (
      <div className="flex items-center gap-5" key={i} onClick={() => setSelectedDocIndex(i)}>
       <span className={`${selectedDocIndex === i ? 'text-custom-white' : 'text-light-black'} transition-all duration-500 text-center font-normal text-base`}>{doc.label}</span>
       {i !== docs.length - 1 && <span className={`w-[5px] h-[5px] rounded-full bg-primary-pink`} />}
      </div>
     ))}
    </div>
    <span />
   </div>
  </div>
 );
}

export default Hero;
