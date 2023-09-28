import React from 'react';
import { Ecosystem, Introduction, Roadmap, SaleDetail, TeamMembers, TokenMetrics } from '@/components/project-detail/timeline/index';
import Image from 'next/image';

const members = [
 {
  name: 'Emircan',
 },
 {
  name: 'Mert',
 },
 {
  name: 'Mustafa',
 },
 {
  name: 'Devran',
 },
];

function Timeline() {
 return (
  <>
   <ol className="ml-5 relative border-l border-light-black flex flex-col gap-4">
    <Introduction />
    <Roadmap />
    <TokenMetrics />
    <SaleDetail />
    <Ecosystem />
    <TeamMembers />
   </ol>
   <div className={`ml-5 mt-4 pl-6 flex flex-wrap gap-6`}>
    {members.map((member, index) => (
     <div key={index} className="flex gap-6 flex-grow-[1] basis-[236px] justify-between w-full items-center border-[1px] max-w-[236px] rounded-2xl border-light-black py-2 px-3">
      <Image src="/project-logo.svg" alt="Logo" width={33} height={33} />
      <h3 className="text-second-white">{member.name}</h3>
      <Image src="/project-detail/team-members-check.svg" className={`${index === 0 ? 'opacity-100' : 'opacity-0'}`} alt="Team members" width={13} height={10} />
     </div>
    ))}
   </div>
  </>
 );
}

export default Timeline;
