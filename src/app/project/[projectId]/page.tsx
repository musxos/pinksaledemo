'use client';
import React, { useState } from 'react';
import { IProject } from '@/lib/project';
import { ProjectDetailHero, ProjectDetailInformation, ProjectDetailSecurity, ProjectDetailTimeline } from '@/components';
import Image from 'next/image';

interface IProjectProps {
 params: { projectId: string };
}

function ProjectDetail({ params: { projectId } }: IProjectProps) {
 // console.log(projectId);

 const [project, setProject] = useState<IProject>({
  id: 1,
  logo: '/project-logo.svg',
  title: 'Project #1',
  desc: '2141A3X4',
  totalRaise: 3970,
  price: 0.05,
  chainLogo: '/chain-logo.svg',
  type: 'DeFi',
  burnedToken: 4,
 });

 return (
  <div className="flex flex-col gap-4 h-full">
   <ProjectDetailHero project={project} />
   <div className="grid 3xl:grid-cols-3 grid-cols-1 gap-10 px-10 xl:px-[320px] 3xl:px-navbar mx-auto w-full">
    <div className="3xl:col-span-2">
     <div className="flex justify-between items-center border-[1px] border-light-black rounded-xl pl-4 pr-3 py-4">
      <h3 className="text-white text-2xl font-normal">
       <span className="text-light-black">#</span>
       &nbsp;{project.title} Info
      </h3>
      <div className="flex items-center gap-6">
       <Image src="/project-detail/twitter.svg" alt="" width={25} height={20} />
       <Image src="/project-detail/instagram.svg" alt="" width={20} height={20} />
       <Image src="/project-detail/facebook.svg" alt="" width={11} height={20} />
       <h3 className="text-sm text-second-white border-[1px] border-light-black rounded-lg px-6 py-1">{project.desc}</h3>
       <Image src="/project-detail/share.svg" alt="" width={16} height={20} />
       <Image src="/project-detail/copy.svg" alt="" width={20} height={20} />
      </div>
     </div>
     <ProjectDetailTimeline />
    </div>
    <div className="h-full grid grid-cols-1 gap-10">
     <ProjectDetailInformation project={project} />
     <ProjectDetailSecurity project={project} />
    </div>
   </div>
  </div>
 );
}

export default ProjectDetail;
