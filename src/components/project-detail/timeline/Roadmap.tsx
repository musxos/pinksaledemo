import React from 'react';

const steps = [
 {
  title: 'Step 1',
  items: ['Research & Development', 'Research & Development', 'Research & Development'],
 },
 {
  title: 'Step 2',
  items: ['Tenet Blockchain Development', 'Tenet Blockchain Development', 'Tenet Blockchain Development'],
 },
 {
  title: 'Step 3',
  items: ['Eva Alpha', 'Eva Alpha', 'Eva Alpha', 'Eva Alpha'],
 },
 {
  title: 'Step 4',
  items: ['Eva Beta', 'Eva Beta', 'Eva Beta', 'Eva Beta'],
 },
 {
  title: 'Step 5',
  items: ['Lending Market Beta', 'Lending Market Beta', 'Lending Market Beta'],
 },
];

function Roadmap() {
 return (
  <li className="ml-6 mt-4 relative">
   <span className="absolute flex items-center justify-center w-[12px] top-5 h-[1px] bg-light-black rounded-full -left-6" />
   <h3 className="mb-6 mt-2 text-base text-white font-normal">Roadmap</h3>
   <div className={`pl-6 grid content-center grid-cols-${steps.length}`}>
    {steps.map((step, index) => (
     <div className="flex flex-col gap-3" key={index}>
      <div className="flex items-center">
       <span className="h-[23px] w-[12px] bg-primary-pink" />
       {index !== steps.length - 1 && <span className="w-full bg-light-black h-[1px]" />}
      </div>
      <h3 className="text-custom-white text-sm">{step.title}</h3>
      {step.items.map((innerItem, innerIndex) => (
       <h3 className="pr-6 text-second-black text-sm font-normal" key={`inner-${innerIndex}`}>
        {innerItem}
       </h3>
      ))}
     </div>
    ))}
   </div>
  </li>
 );
}

export default Roadmap;
