'use client';
import React, { useState } from 'react';
import { demoProjects } from '@/lib/project';
import { HomeAbout, HomeHero, HomeProjects, HomeWorkflow, HomeAddNewProject, HomeTimelineForProject, HomeRoadmap, HomeContact } from '@/components';

function Page() {
 const [projects, setProjects] = useState(demoProjects);

 return (
  <div className={`relative flex flex-col w-full px-10 gap-14 3xl:px-navbar h-full`}>
   <HomeHero />
   <HomeProjects projects={projects} />
   <HomeAbout />
   <HomeWorkflow />
   <HomeAddNewProject />
   <HomeTimelineForProject projects={projects} />
   <HomeRoadmap />
   <HomeContact />
  </div>
 );
}

export default Page;
