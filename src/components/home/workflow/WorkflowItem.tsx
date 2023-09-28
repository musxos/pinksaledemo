import React from 'react';
import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function WorkflowItem({ workflow, gradient = false, opacity }: { workflow: any; gradient: boolean; opacity: string }) {
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
    className={`transition-all duration-50 bg-bold-black p-[1px] border-[1px] border-light-black rounded-[80px] h-full max-w-[760px] items-center ${
     gradient && 'bg-gradient-to-r from-[#F3ABFF] via-primary-pink to-primary-pink/0'
    } ${opacity}`}
   >
    <div className={`transition-all duration-50 py-3 px-6 grid grid-cols-2 bg-bold-black rounded-[80px] h-full max-w-[760px] items-center`}>
     <div className="flex items-center gap-10">
      <Image src={workflow.icon} alt="" width={90} height={90} className="w-14 xl:w-auto" />
      <h3 className="font-light text-white text-lg">{workflow.title}</h3>
      <Image src="/home/workflow/line.svg" alt="Workflow line" height={78} width={1} />
     </div>
     <p className="max-w-[362px] text-second-black text-base font-normal">{workflow.desc}</p>
    </div>
   </motion.div>
  </AnimatePresence>
 );
}

export default WorkflowItem;
