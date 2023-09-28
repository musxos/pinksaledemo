'use client';
import React, { useState } from 'react';
import { accesses, IAccess } from '@/lib/access';
import { chains, IChain } from '@/lib/chain';
import Image from 'next/image';
import CustomSelect from '@/components/toolbox/CustomSelect';

interface PropTypes {
 selectedTab: { id: number; title: string };
 setSelectedTab: Function;
 setSelectedAccess: Function;
 selectedAccess: IAccess | null;
 setSelectedChain: Function;
 selectedChain: IChain | null;
 projectsLength: number;
 onSearchChanged: Function;
}

function TabsFilters({ onSearchChanged, selectedTab, setSelectedTab, selectedAccess, setSelectedAccess, setSelectedChain, projectsLength, selectedChain }: PropTypes) {
 const tabs = [
  {
   id: 0,
   title: 'On Air',
  },
  {
   id: 1,
   title: 'Upcoming',
  },
  {
   id: 2,
   title: 'Past',
  },
 ];
 const [showSearch, setShowSearch] = useState(false);

 const onAccessChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedId = Number(e.target.value);
  if (!selectedId) {
   setSelectedAccess(null);
  } else {
   const access = accesses.find((it) => it.id === Number(e.target.value));
   setSelectedAccess(access);
  }
 };

 const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => onSearchChanged(e.target.value);

 const onChainChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
  console.log(e.target.value);
 };

 return (
  <div className="grid grid-cols-3 xl:grid-cols-5 gap-10 z-10 px-10 xl:px-[280px] 3xl:px-[480px]">
   <div className="col-span-3 xl:col-span-2 flex items-center justify-between gap-10">
    <div className="flex justify-between items-center w-full">
     {tabs.map((tab, index) => (
      <span
       onClick={() => setSelectedTab(tab)}
       className={`pb-4 cursor-pointer transition-all duration-30 text-white w-full text-center ${
        tab.id === selectedTab.id ? 'border-b-primary-pink border-b-[5px]' : 'border-b-light-black border-b-[1px]'
       }`}
       key={index}
      >
       {tab.title}
      </span>
     ))}
    </div>
    <span className="xl:flex hidden bg-light-black rounded-full h-[5px] w-[5px]"></span>
   </div>
   <div className="col-span-3 grid grid-cols-5 items-center gap-14">
    <div className="flex items-center justify-between col-span-4 gap-6">
     <CustomSelect defaultText="Select Access" items={accesses} selected={selectedAccess} onChange={(value: any) => setSelectedAccess(value)} renderKey="name" />
     <CustomSelect defaultText="Select Chain" items={chains} selected={selectedChain} onChange={(value: any) => setSelectedChain(value)} renderKey="name" />
    </div>
    <div className="col-span-1 flex items-center gap-2 cursor-pointer justify-end" onClick={() => setShowSearch((prev) => !prev)}>
     <span className="leading-5 text-primary-pink text-base font-medium">Search</span>
     <Image src={`/search${showSearch ? '-x' : ''}.svg`} alt="Search.." width={18} height={18} />
    </div>
   </div>
   {showSearch && (
    <div className="col-span-3 xl:col-span-full flex items-center gap-6">
     <span className="whitespace-nowrap text-light-black font-medium text-base w-[250px]">“{projectsLength}” Projects found.</span>
     <span className="bg-light-black h-[1px] w-full"></span>
     <div className="min-w-[200px] bg-input flex items-center justify-between px-2 gap-2 py-2 w-[315px] border-[1px] border-primary-pink/60 rounded-lg">
      <input type="text" onChange={onInputChanged} className="h-full w-full outline-0 text-base text-second-white" placeholder="Search..." />
      <Image src={`/search.svg`} alt="Search.." width={18} height={18} />
     </div>
    </div>
   )}
  </div>
 );
}

export default TabsFilters;
