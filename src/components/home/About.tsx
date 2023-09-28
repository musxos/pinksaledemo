import React, { useState } from 'react';
import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
 {
  question: 'What is PinkSale?',
  answer: 'PinkSale is a platform that allows you to buy and sell your own pink shirts.',
 },
 {
  question: 'What is PinkSale?',
  answer: 'PinkSale is a platform that allows you to buy and sell your own pink shirts.',
 },
 {
  question: "What's different about Pinksale?",
  answer: 'PinkSale is a platform that allows you to buy and sell your own pink shirts.',
 },
 {
  question: 'What is PinkSale?',
  answer: 'PinkSale is a platform that allows you to buy and sell your own pink shirts.',
 },
];

function About() {
 const [open, setOpen] = useState<number | null>(0);

 return (
  <div className="flex flex-col items-center justify-center gap-14 relative">
   <Image src="/home/about/about-ellipse-left.svg" className="absolute -left-[30%] top-0" alt="" width={659} height={659} />
   <Image src="/home/about/about-ellipse-right.svg" className="absolute -right-[30%] top-0" alt="" width={659} height={659} />
   <div className="max-w-[500px] mx-auto items-center flex gap-4 flex-col z-0 relative">
    <Image src="/home/about/about.svg" alt="About" className="mb-auto" width={95} height={95} />
    <div className="text-4xl font-light text-custom-white flex items-center">
     <h3 className="font-medium">PinkSale&nbsp;</h3> About
    </div>
    <p className="text-base font-normal text-center text-second-black leading-5">
     Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris. Fusce vitae felis eget quam hendrerit vulputate. Ut sit amet mi viverra, maximus ex quis, volutpat ligula. Nullam
     quam felis, tempor eu bibendum eu, faucibus at mi. Mauris id orci id nunc varius vehicula et sed lectus.
    </p>
   </div>
   <div className="mx-auto flex flex-col gap-10 col-span-2">
    {faqs.map((faq, index) => (
     <motion.div key={index} onClick={() => (open === index ? setOpen(null) : setOpen(index))} initial={false} className="flex gap-4 justify-start items-start">
      <div className="bg-input hover:bg-primary-pink hover:border-[#F196FF] border-[1px] border-light-black w-[40px] rounded-lg flex items-center justify-center h-[40px]">
       {open === index ? (
        <Image src="/home/about/about-arrow-down.svg" className="" alt="" width={12} height={6} />
       ) : (
        <Image src="/home/about/about-arrow-right.svg" className="" alt="" width={6} height={12} />
       )}
      </div>
      <div className="flex flex-col gap-2 mt-2">
       <h2 className="text-xl font-normal text-custom-white">{faq.question}</h2>
       <AnimatePresence initial={false}>
        {open === index && (
         <motion.p
          className="text-second-black text-base font-norrmal"
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
           open: { opacity: 1, height: 'auto' },
           collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
         >
          {faq.answer}
         </motion.p>
        )}
        {/*{open === index && <p className="transition-all duration-500 text-second-black text-base font-norrmal">{faq.answer}</p>}*/}
       </AnimatePresence>
      </div>
     </motion.div>
    ))}
   </div>
  </div>
 );
}

export default About;
