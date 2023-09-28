import React from 'react';
import Image from 'next/image';
import currencyFormat from '@/helpers/currencyFormat';
import { IProject } from '@/lib/project';

const items = [
 {
  label: 'Buy Tax',
  value: '0%',
  isGreen: true,
 },
 {
  label: 'Sell Tax',
  value: '0%',
  isGreen: true,
 },
 {
  label: 'Tax Modifiable',
  value: '0%',
  isGreen: false,
 },
 {
  label: 'Ownership Renounced',
  value: 'Yes',
  isGreen: true,
 },
 {
  label: 'Ownership Renounced',
  value: 'Yes',
  isGreen: true,
 },
 {
  label: 'Ownership Renounced',
  value: 'Yes',
  isGreen: true,
 },
 {
  label: 'Ownership Renounced',
  value: 'Yes',
  isGreen: true,
 },
 {
  label: 'Ownership Renounced',
  value: 'Yes',
  isGreen: true,
 },
 {
  label: 'Ownership Renounced',
  value: 'Yes',
  isGreen: true,
 },
 {
  label: 'Ownership Renounced',
  value: 'Yes',
  isGreen: true,
 },
 {
  label: 'Ownership Renounced',
  value: 'Yes',
  isGreen: true,
 },
];

interface IPropTypes {
 project: IProject;
}

function Security({ project }: IPropTypes) {
 return (
  <div className="border-[1px] w-full border-light-black rounded-xl flex gap-7 flex-col p-6 bg-gradient-to-b from-[#23B782]/10 to-[#121212]/10">
   <div className="flex items-center gap-3">
    <Image src="/project-detail/security.svg" alt="Security icon" width={62} height={62} />
    <h3 className="text-xl font-normal text-second-black">Security</h3>
   </div>
   <div className="grid grid-cols-1 gap-4">
    {items.map((item, index) => (
     <div key={index} className="bg-[#0F1211] border-[1px] rounded-lg border-[#1A2C25] w-full flex justify-between items-center px-3 py-2">
      <div className="flex items-center gap-4">
       <Image src={`/project-detail/security-${!item.isGreen ? 'not-' : ''}confirm.svg`} alt="" width={20} height={20} />
       <h4 className="font-normal text-base text-white">{item.label}</h4>
      </div>
      <h4 className={`font-normal text-base ${item.isGreen ? 'text-[#22AD7B]' : 'text-[#AD2828]'}`}>{item.value}</h4>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Security;
