import React, { useState } from 'react';
import Image from 'next/image';

const roadmaps = [
 'Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris.',
 'Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris.',
 'Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris.',
 'Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris.',
];

const members = [
 {
  nameSurname: 'Name Surname',
  title: 'Founder',
  twitter: '#',
  instagram: '#',
 },
 {
  nameSurname: 'Name Surname',
  title: 'Founder',
  twitter: '#',
  instagram: '#',
 },
 {
  nameSurname: 'Name Surname',
  title: 'Founder',
  twitter: '#',
  instagram: '#',
 },
 {
  nameSurname: 'Name Surname',
  title: 'Founder',
  twitter: '#',
  instagram: '#',
 },
];

function Roadmap() {
 const [selected, setSelected] = useState(0);

 return (
  <div className="-mt-24 pt-32 relative min-h-[1200px] w-full max-w-[1100px] mx-auto gap-20 flex flex-col">
   <Image src="/home/roadmap/bg.svg" className="absolute top-0" alt="" width={1236} height={1236} />
   <div className="max-w-[500px] mx-auto items-center flex gap-20 flex-col z-0 relative">
    <div className="gap-4 flex flex-col items-center">
     <Image src="/home/about/about.svg" alt="About" className="mb-auto" width={95} height={95} />
     <h3 className="text-4xl text-custom-white flex items-center font-medium">Roadmap</h3>
     <p className="text-base font-normal text-center text-second-black leading-5">{roadmaps[selected]}</p>
    </div>
    <div className="gap-6 flex flex-col items-center">
     <div className={`flex items-center gap-2`}>
      {roadmaps.map((_, index) => (
       <button
        key={index}
        onClick={() => setSelected(index)}
        className={`${selected === index ? 'bg-primary-pink border-[1px] border-[#E881F9] w-[63px]' : 'bg-input border-[1px] border-light-black w-[16px]'} rounded-xl h-[8px]`}
       ></button>
      ))}
     </div>
     <button className="bg-input border-[1px] border-light-black rounded-lg p-2 px-8 text-center text-lg text-white font-light">Our Goal</button>
     <p className="text-second-black text-base font-normal mx-auto max-w-[500px] text-center">
      Pellentesque at libero ut velit volutpat maximus. Pellentesque in mauris mauris. Fusce vitae felis eget quam hendrerit vulputate. Ut sit amet mi viverra, maximus ex quis, volutpat ligula. Nullam
      quam felis, tempor eu bibendum eu, faucibus at mi. Mauris id orci id nunc varius vehicula et sed lectus.
     </p>
     <div className="mx-auto flex items-center">
      <Image src="/home/roadmap/left.svg" alt="" width={60} height={60} />
      <Image src="/home/roadmap/right.svg" alt="" width={60} height={60} />
     </div>
    </div>
   </div>
   <div className="gap-6 w-full flex flex-col items-center">
    <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items gap-6 max-w-[1200px] w-full`}>
     {members.map((member, index) => (
      <div
       className="min-h-[325px] flex flex-col justify-center items-center gap-3 rounded-full border-[1px] p-6 border-light-black bg-gradient-to-b from-[#F9F9F9]/5 to-[#262626]/0 w-full"
       key={index}
      >
       <div className="flex relative w-[131px] h-[131px]">
        <Image src="/home/roadmap/logo-ellipse.svg" className="absolute top-0 left-0" alt="Logo Ellipse" width={131} height={131} />
        <Image src="/project-logo.svg" className="absolute top-[50%] left-[50%]" style={{ transform: 'translate(-50%, -50%)' }} alt="Logo Ellipse" width={90} height={90} />
       </div>
       <div className="flex flex-col items-center gap-2">
        <span className="text-white text-lg text-center font-light">{member.nameSurname}</span>
        <span className="bg-[#373737]/25 px-3 text-center rounded-xl border-[1px] border-light-black text-custom-white">{member.title}</span>
        <div className="gap-2 flex items-center">
         <Image src="/home/roadmap/twitter.svg" alt="Twitter" width={20} height={20} />
         <Image src="/home/roadmap/instagram.svg" alt="Instagram" width={20} height={20} />
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default Roadmap;
