import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import currencyFormat from '@/helpers/currencyFormat';
import { IProject } from '@/lib/project';

import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ProjectItem({ isVote, project, opacity }: { opacity?: string; project: IProject; isVote: boolean }) {
 const [ref, inView] = useInView({
  triggerOnce: false,
  threshold: 0.1,
 });

 return (
  <AnimatePresence initial={false}>
   <motion.div
    ref={ref}
    initial={{ y: 0 }}
    animate={{ y: inView ? 0 : 100 }}
    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
    className={`transition-all duration-50 hover:border-primary-pink hover:bg-input bg-bold-black py-3 px-6 grid grid-cols-8 border-[1px] border-light-black rounded-3xl h-full items-center ${opacity}`}
   >
    <div className="flex items-center gap-6 col-span-2">
     <Link href={`/project/${project.id}`}>
      <Image src="/project-logo.svg" alt="" width={70} height={70} className="w-14 xl:w-auto" />
     </Link>
     <div className="flex gap-1 flex-col justify-between">
      <span className="border-[2px] 3xl:w-4/5 border-[#222222] text-[#676767] rounded-xl text-center text-xs font-normal">{project.desc}</span>
      <Link href={`/project/${project.id}`} className="hover:border-b-[3px] border-b-light-black text-custom-white font-normal text-base xl:text-xl">
       {project.title}
      </Link>
     </div>
    </div>
    <div className="flex justify-center items-center">
     <span className="h-[14px] w-[1px] bg-light-black flex items-center justify-center"></span>
    </div>
    {isVote ? (
     <>
      <div className="col-span-3 flex gap-3 items-center justify-center">
       <button className="bg-none border-[1px] border-light-black text-custom-white w-[120px] h-[40px] rounded-lg">Yes</button>
       <button className="bg-none border-[1px] border-light-black text-custom-white w-[120px] h-[40px] rounded-lg">No</button>
      </div>
      <div className="flex justify-center items-center">
       <span className="h-[14px] w-[1px] bg-light-black flex items-center justify-center"></span>
      </div>
      <div className="flex items-center gap-3 justify-center">
       <span className="text-second-black font-normal text-base">Yes</span>
       <span className="bg-primary-pink h-[8px] w-[8px]" />
       <span className="text-custom-white font-normal text-base">90</span>
      </div>
     </>
    ) : (
     <>
      <div className="flex flex-col items-center justify-start xl:justify-center h-full">
       <span className="text-light-black font-normal text-base text-center">Total Raise</span>
       <span className="text-custom-white font-normal text-base">{currencyFormat(project.totalRaise)}</span>
      </div>
      <div className="flex flex-col items-center justify-start xl:justify-center h-full">
       <span className="text-light-black font-normal text-base">Price</span>
       <span className="text-custom-white font-normal text-base text-center">{project.price} USDT</span>
      </div>
      <div className="flex flex-col items-center justify-start xl:justify-center h-full">
       <span className="text-light-black font-normal text-base">Chain</span>
       <Image src={project.chainLogo} alt="Chain Logo" width={20} height={20} />
      </div>
      <div className="flex flex-col items-center justify-start xl:justify-center h-full">
       <span className="text-light-black font-normal text-base text-center">Type</span>
       <span className="text-custom-white font-normal text-base">{project.type}</span>
      </div>
      <div className="flex flex-col items-center justify-start xl:justify-center h-full">
       <span className="text-light-black font-normal text-base text-center">Burned Token</span>
       <span className="text-custom-white font-normal text-base text-center">{project.burnedToken}</span>
      </div>
     </>
    )}
   </motion.div>
  </AnimatePresence>
 );
}

export default ProjectItem;
