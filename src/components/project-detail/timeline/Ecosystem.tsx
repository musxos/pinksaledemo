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

function Ecosystem() {
 return (
  <li className="ml-6 mt-4 relative">
   <span className="absolute flex items-center justify-center w-[12px] top-5 h-[1px] bg-light-black rounded-full -left-6" />
   <h3 className="mb-6 mt-2 text-base text-white font-normal">Ecosystem</h3>
   <div className={`pl-6 grid content-center grid-cols-${steps.length}`}>
    <span>Table</span>
    <span>Table</span>
    <span>Table</span>
   </div>
  </li>
 );
}

export default Ecosystem;
