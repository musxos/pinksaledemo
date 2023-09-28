import React from 'react';
import Image from 'next/image';
import currencyFormat from '@/helpers/currencyFormat';
import { IProject } from '@/lib/project';

const items = [
 {
  label: 'Ticker',
  value: 'ticker',
 },
 {
  label: 'Blockchain Network',
  value: 'blockchain',
 },
 {
  label: 'Token Supply',
  value: 'tokenSupply',
  valueGetter: (tokenSupply: number) => currencyFormat(tokenSupply).replace('$', ''),
 },
 {
  label: 'Project Valuation',
  value: 'projectValuation',
  valueGetter: (pv: number) => currencyFormat(pv),
 },
 {
  label: 'Initial Market Cap',
  value: 'initialMarketCap',
  valueGetter: (imc: number) => currencyFormat(imc),
 },
 {
  label: 'Hard Cap',
  value: 'hardCap',
  valueGetter: (hc: number) => currencyFormat(hc),
 },
];

interface IPropTypes {
 project: IProject;
}

function Information({ project }: IPropTypes) {
 return (
  <div className="border-[1px] w-full border-light-black rounded-xl flex gap-7 flex-col p-6">
   <div className="flex items-center gap-3">
    <Image src="/project-detail/information.svg" alt="Information icon" width={62} height={62} />
    <h3 className="text-xl font-normal text-second-black">Information</h3>
   </div>
   <div className="grid grid-cols-1 gap-6">
    {items.map((item, index) => (
     <div className="flex gap-4 items-center justify-between" key={index}>
      <h4 className="text-second-black whitespace-nowrap">{item.label}</h4>
      <span className="w-full h-[1px] bg-light-black"></span>
      <span className="text-[#F2A1FF] border-[1px] border-[#A502BF] bg-[#A502BF]/25 px-4 rounded-lg">
       {/*@ts-ignore*/}
       {item.valueGetter ? item.valueGetter(project[item.value]) : project[item.value]}
      </span>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Information;
