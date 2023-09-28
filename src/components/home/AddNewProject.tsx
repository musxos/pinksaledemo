import React from 'react';
import Image from 'next/image';

function AddNewProject() {
 return (
  <div className="grid grid-cols-5 content-center p-20 gap-20 max-w-[1300px] mx-auto w-full rounded-2xl bg-gradient-to-l from-[#450050] via-[#C02ED8] to-[#450050] border-[1px] border-[#EF88FF]">
   <div className="flex flex-col gap-5 col-span-2">
    <div className="flex items-center whitespace-nowrap text-custom-white font-bold text-4xl">
     Add <h3 className="font-normal">&nbsp;a project now</h3>
    </div>
    <p className="font-light text-lg text-[#F5B7FF]">Do you have a project? Then send it to us immediately and we will publish it in the regions</p>
   </div>
   <Image src="/home/add-project/centered-icon.svg" alt="Centered" width={120} height={120} />
   <Image className="col-span-2 my-auto" src="/home/add-project/arrow-right.svg" alt="Centered" width={360} height={1} />
  </div>
 );
}

export default AddNewProject;
