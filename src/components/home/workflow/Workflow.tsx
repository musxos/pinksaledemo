import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { HomeWorkflowItem } from '@/components';

const workflows = [
 {
  icon: '/home/workflow/workflow-1.svg',
  title: 'Application',
  desc: 'Pellentesque at libero ut velit volutpat maximus Pellentesque in mauris mauris.',
 },
 {
  icon: '/home/workflow/workflow-2.svg',
  title: 'Application',
  desc: 'Pellentesque at libero ut velit volutpat maximus Pellentesque in mauris mauris.',
 },
 {
  icon: '/home/workflow/workflow-3.svg',
  title: 'Application',
  desc: 'Pellentesque at libero ut velit volutpat maximus Pellentesque in mauris mauris.',
 },
 {
  icon: '/home/workflow/workflow-4.svg',
  title: 'Application',
  desc: 'Pellentesque at libero ut velit volutpat maximus Pellentesque in mauris mauris.',
 },
];

function Workflow() {
 return (
  <div className="flex flex-col items-center justify-center gap-14 relative">
   <div className="max-w-[500px] mx-auto items-center flex gap-4 flex-col z-0 relative">
    <Image src="/home/workflow/workflow.svg" alt="Workflow" className="mb-auto" width={95} height={95} />
    <div className="text-4xl font-light text-custom-white flex items-center">
     <h3 className="font-medium">PinkSale&nbsp;</h3> Workflow
    </div>
    <p className="text-base font-normal text-center text-second-black leading-5">Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris.</p>
   </div>
   <motion.div initial={false} className="mx-auto flex flex-col gap-4">
    {workflows.map((workflow, index) => (
     <HomeWorkflowItem opacity={index === 0 ? 'opacity-90' : index === 1 ? 'opacity-60' : index === 2 ? 'opacity-40' : 'opacity-10'} gradient={index === 0} workflow={workflow} />
    ))}
   </motion.div>
  </div>
 );
}

export default Workflow;
