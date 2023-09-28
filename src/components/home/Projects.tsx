import React from 'react';
import Image from 'next/image';
import ProjectItem from '@/components/toolbox/ProjectItem';
import Link from 'next/link';
import { IProject } from '@/lib/project';

import { motion } from 'framer-motion';

function Projects({ projects }: { projects: IProject[] }) {
 return (
  <div className="grid grid-cols-1 xl:grid-cols-3 mt-28 gap-10">
   <div className="flex gap-4">
    <Image src="/home/projects.svg" alt="Projects" className="mb-auto" width={95} height={95} />
    <div className="flex flex-col pt-[23px] gap-6">
     <h2 className="text-4xl font-light text-custom-white">Projects</h2>
     <p className="text-base font-normal text-left text-second-black leading-5">
      Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris. Fusce vitae felis eget quam hendrerit vulputate. Ut sit amet mi viverra, maximus ex quis, volutpat ligula. Nullam
      quam felis, tempor eu bibendum eu, faucibus at mi. Mauris id orci id nunc varius vehicula et sed lectus.
     </p>
    </div>
   </div>
   <motion.div initial={false} className="col-span-2 flex gap-4 flex-col z-0 relative">
    {projects.map((project, index) => (
     <ProjectItem opacity={index === 0 ? 'opacity-90' : index === 1 ? 'opacity-60' : index === 2 ? 'opacity-40' : 'opacity-10'} project={project} isVote={false} key={index} />
    ))}
    <Link href="/tenders" className="z-20 mx-auto py-5 px-5 rounded-xl bg-bold-black border-[1px] hover:border-[#EF9DFC] hover:bg-primary-pink border-light-black -mt-14 transition-all duration-500">
     <Image src="/home/projects-more.svg" className="mx-auto" alt="" width={20} height={20} />
    </Link>
   </motion.div>
  </div>
 );
}

export default Projects;
