'use client';
import React, { useState } from 'react';
import { Hero, Projects, TabsFilters } from '@/components';
import { demoProjects } from '@/lib/project';

export default function Tenders() {
 const desc =
  'Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris. Fusce vitae felis eget quam hendrerit vulputate. Ut sit amet mi viverra, maximus ex quis, volutpat ligula. Nullam quam felis, tempor eu bibendum eu, faucibus at mi. Mauris id orci id nunc varius vehicula et sed lectus.';

 const [selectedTab, setSelectedTab] = useState({ id: 0, title: 'On air' });
 const [selectedAccess, setSelectedAccess] = useState(null);
 const [selectedChain, setSelectedChain] = useState(null);

 const onSearchChanged = (search: string) => {
  // filter projects here
  console.log(search);
 };

 const [projects, setProjects] = useState(demoProjects);

 return (
  <div className="flex gap-14 flex-col">
   <Hero icon="/tenders.svg" description={desc} title="Tenders" />
   <div className="flex flex-col gap-6 z-10">
    <TabsFilters
     onSearchChanged={onSearchChanged}
     projectsLength={3}
     setSelectedChain={setSelectedChain}
     selectedChain={selectedChain}
     selectedAccess={selectedAccess}
     selectedTab={selectedTab}
     setSelectedTab={setSelectedTab}
     setSelectedAccess={setSelectedAccess}
    />
    <Projects projects={projects} />
   </div>
  </div>
 );
}
