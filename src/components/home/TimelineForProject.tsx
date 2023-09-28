import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import ProjectItem from '@/components/toolbox/ProjectItem';
import { IProject } from '@/lib/project';

function TimelineForProject({ projects }: { projects: IProject[] }) {
 return (
  <div className="flex flex-col items-center justify-center gap-14 relative">
   <div className="max-w-[500px] mx-auto items-center flex gap-4 flex-col z-0 relative">
    <Image src="/home/timeline-for-project/project.svg" alt="TimelineForProject" className="mb-auto" width={95} height={95} />
    <div className="text-4xl font-light text-custom-white flex items-center">
     <h3 className="font-medium">Timeline&nbsp;</h3> for Project
    </div>
    <p className="text-base font-normal text-center text-second-black leading-5">Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris.</p>
   </div>
   <div className="mx-auto flex flex-col gap-4">
    <motion.div initial={false} className="flex gap-10 z-0 relative">
     <Image src="/home/timeline-for-project/10.svg" className="hidden xl:flex" alt="" width={218} height={242} />
     <div className="flex flex-col gap-4 relative">
      <h3 className="mx-auto border-[1px] bg-[#340B3A] border-primary-pink/25 rounded-lg px-4 text-custom-white font-normal text-base">10 DAYS LATER</h3>
      {projects.slice(0, 3).map((project, index) => (
       <ProjectItem project={project} isVote={false} key={index} />
      ))}
     </div>
     <Image src="/home/timeline-for-project/10.svg" className="opacity-0 hidden xl:flex" alt="" width={218} height={242} />
    </motion.div>
    <motion.div initial={false} className="flex gap-10 z-0 relative">
     <Image src="/home/timeline-for-project/20.svg" className="opacity-0 hidden xl:flex" alt="" width={218} height={242} />
     <div className="flex flex-col gap-4">
      <h3 className="mx-auto border-[1px] bg-[#340B3A] border-primary-pink/25 rounded-lg px-4 text-custom-white font-normal text-base">20 DAYS LATER</h3>
      {projects.slice(0, 3).map((project, index) => (
       <ProjectItem project={project} isVote={false} key={index} />
      ))}
     </div>
     <Image src="/home/timeline-for-project/20.svg" className=" hidden xl:flex" alt="" width={218} height={242} />
    </motion.div>
   </div>
  </div>
 );
}

export default TimelineForProject;
