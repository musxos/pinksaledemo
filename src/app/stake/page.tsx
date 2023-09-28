'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const refs = [
 {
  url: '/huobi.svg',
  width: 81,
  height: 24,
 },
 {
  url: '/gateio.svg',
  width: 87,
  height: 20,
 },
 {
  url: '/pancakeswap.svg',
  width: 123,
  height: 29,
 },
 {
  url: '/kucoin.svg',
  width: 92,
  height: 21,
 },
 {
  url: '/bybit.svg',
  width: 69,
  height: 62,
 },
];

function Page() {
 const [selectedTab, setSelectedTab] = useState(0);
 const [selectedDays, setSelectedDays] = useState(30);

 return (
  <div className="flex gap-8 flex-col mx-auto relative max-w-[840px]">
   <Image className="hidden xl:flex 4xl:hidden absolute left-[50%] top-[50%] -z-10" style={{ transform: 'translate(-50%, -50%)' }} src="/ellipse/ellipse-center.svg" alt="" width={600} height={600} />
   <h3 className="text-center text-4xl text-custom-white">
    <span className="text-primary-pink">Stake</span> our project now.
   </h3>
   <span className="bg-light-black w-[5px] h-[5px] rounded-full mx-auto" />
   <h4 className="text-second-black font-normal text-base text-center">
    Sed mauris nisi, porttitor rutrum facilisis vel, aliquam in lectus. Integer aliquet interdum tortor, scelerisque viverra quam vehicula ac.
   </h4>
   <div className="max-w-[640px] mx-auto w-full flex flex-col bg-bold-black border-[1px] border-light-black rounded-xl">
    <div className="flex justify-between items-center py-4 px-6 border-b-[1px] border-light-black">
     <span className="text-base font-normal text-white">Lock Periods</span>
     <div className="flex items-center border-[1px] border-input rounded-lg min-w-[165px]">
      {['Legacy', 'New'].map((text, index) => (
       <span
        onClick={() => setSelectedTab(index)}
        className={`py-1 w-3/6 cursor-pointer transition-all duration-500 text-center ${
         selectedTab === index ? 'bg-primary-pink text-custom-white' : 'text-second-black'
        } font-normal text-base rounded-lg`}
        key={index}
       >
        {text}
       </span>
      ))}
     </div>
    </div>
    <div className="flex flex-col gap-5 p-6">
     <div className="grid grid-cols-4 gap-3">
      {[30, 90, 120, 270].map((days, index) => (
       <div
        key={index}
        onClick={() => setSelectedDays(days)}
        className={`cursor-pointer flex w-full justify-center py-3.5 transition-all duration-500 items-center ${
         selectedDays === days ? 'border-[1px] border-primary-pink' : 'bg-input border-none'
        } rounded-lg`}
       >
        <span className={`text-white text-center font-normal text-base rounded-lg`} key={index}>
         {days} Days
        </span>
       </div>
      ))}
     </div>
     <h3 className="text-primary-pink text-center">1% SFUND APR, 50% negative impact (0.5x) on seed staking points generation per SFUND</h3>
     <div className="flex items-center justify-between gap-3">
      <span className="text-second-black whitespace-nowrap font-normal text-base">Staked Amount</span>
      <span className="h-[1px] w-full bg-second-black" />
      <span className="border-[1px] border-primary-pink bg-[#A502BF]/25 px-4 whitespace-nowrap text-custom-white rounded-lg">0 SFUND</span>
     </div>
     <div className="flex items-center justify-between gap-3">
      <span className="text-second-black whitespace-nowrap font-normal text-base">Wallet Balance</span>
      <span className="h-[1px] w-full bg-second-black" />
      <span className="border-[1px] border-primary-pink bg-[#A502BF]/25 px-4 whitespace-nowrap text-custom-white rounded-lg">0 SFUND</span>
     </div>
     <div className="flex items-center justify-between gap-3 bg-input px-6 border-[1px] border-light-black rounded-xl">
      <input type="text" className="w-full outline-0 h-[53px] text-base text-second-black" placeholder="Enter Stake Amount" />
      <span className="border-[1px] border-primary-pink bg-[#A502BF]/25 px-4 whitespace-nowrap text-custom-white rounded-lg cursor-pointer">Max</span>
     </div>
     <div className="mx-auto flex items-center gap-8">
      <div className="flex flex-col items-center justify-center">
       <span className="text-primary-pink font-normal text-base">APR Rate</span>
       <span className="text-second-white font-normal text-base">1%</span>
      </div>
      <span className={`w-[5px] h-[5px] rounded-full bg-light-black`} />
      <div className="flex flex-col items-center justify-center">
       <span className="text-primary-pink font-normal text-base">Maturity Date</span>
       <span className="text-second-white font-normal text-base">-</span>
      </div>
      <span className={`w-[5px] h-[5px] rounded-full bg-light-black`} />
      <div className="flex flex-col items-center justify-center">
       <span className="text-primary-pink font-normal text-base">Reward Balance</span>
       <span className="text-second-white font-normal text-base">-</span>
      </div>
     </div>
     <div className="w-full bg-input hover:bg-primary-pink flex items-center cursor-pointer justify-center rounded-xl py-3.5 border-[1px] border-primary-pink">
      <span className="text-white">Connect Your Wallet</span>
     </div>
    </div>
   </div>
   <div className="max-w-[640px] mx-auto w-full grid grid-cols-5 items-center">
    {refs.map((ref, index) => (
     <Image className="mx-auto" key={index} src={'/stake' + ref.url} width={ref.width} height={ref.height} alt="Ref Image" />
    ))}
   </div>
  </div>
 );
}

export default Page;
