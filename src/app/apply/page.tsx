'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormType {
 placeholder: string;
 value: string;
 type?: string;
}

const projectInfoFields: IFormType[] = [
 {
  placeholder: 'Project Name',
  value: 'projectName',
 },
 {
  placeholder: 'Project Name',
  value: 'projectName 2',
 },
];
const linksFields: IFormType[] = [
 {
  placeholder: 'Project Name',
  value: 'projectName 3',
 },
];

const schema = yup.object().shape({
 projectName: yup.string().required('Project name required').min(3, 'Project name must be at greater than 3 characters'),
});

export default function Apply() {
 const {
  setFocus,
  register,
  handleSubmit,
  formState: { errors },
 } = useForm({
  resolver: yupResolver(schema),
  mode: 'onChange',
 });

 const onSubmit = (data: any) => {
  console.log(data);
 };

 useEffect(() => {
  // @ts-ignore
  setFocus(errors[0]);
 }, [errors]);

 return (
  <div className="flex gap-14 flex-col items-center justify-center px-10 max-w-[1066px] mx-auto">
   <form onSubmit={handleSubmit(onSubmit)} onError={(e) => console.log(e)} className="h-full flex flex-col justify-between">
    <div className="flex justify-between gap-10">
     <div className="flex items-start w-full gap-4">
      <div className="h-full flex items-center flex-col min-w-[50px]">
       <Image src="/apply/project-info.svg" alt="Project Info" width={48} height={48} />
       <div className="w-[1px] h-full bg-gradient-to-r from-primary-pink via-[#F7C2FF] to-primary-pink"></div>
      </div>
      <div className="mt-3.5 flex flex-col gap-4 w-full">
       <h1 className="text-base font-normal text-custom-white">Project Info</h1>
       <div className="gap-2 flex flex-col w-full">
        {projectInfoFields.map((info, index) => (
         <div className="flex flex-col w-full gap-1">
          <input
           // @ts-ignore
           {...register(info.value)}
           key={index}
           type={info.type || 'text'}
           placeholder={info.placeholder}
           className="focus:border-second-black text-base text-white pl-2 outline-0 focus:bg-light-black bg-bold-black w-full border-[1px] border-second-black h-[50px] rounded-xl"
          />
          {/*@ts-ignore*/}
          {errors[info.value] && <span className="text-xs text-primary-pink">{errors[info.value]?.message}</span>}
         </div>
        ))}
       </div>
      </div>
     </div>
     <div className="flex flex-col gap-4 w-full">
      <h3 className="text-3xl font-normal text-white">Apply for GLI</h3>
      <Image src="/apply/step-1.svg" className="mt-2 -mb-6" alt="Step 1" width={380} height={70} />
      <p className="text-second-white text-base font-normal">Project Info</p>
      <p className="text-second-white text-base font-normal whitespace-pre-wrap">
       Sed mauris nisi, porttitor rutrum facilisis vel, aliquam in lectus. Integer aliquet interdum tortor, scelerisque viverra quam vehicula ac.
      </p>
     </div>
    </div>
    <div className="flex justify-between gap-10">
     <div className="flex items-start w-full gap-4">
      <div className="h-full flex items-center flex-col min-w-[50px]">
       <Image src="/apply/links.svg" alt="Links" width={48} height={48} />
      </div>
      <div className="mt-3.5 flex flex-col gap-4 w-full">
       <h1 className="text-base font-normal text-custom-white">Links</h1>
       <div className="gap-2 flex flex-col w-full">
        {linksFields.map((info, index) => (
         <div className="flex flex-col w-full gap-1">
          <input
           // @ts-ignore
           {...register(info.value)}
           key={index}
           type={info.type || 'text'}
           placeholder={info.placeholder}
           className="focus:border-second-black text-base text-white pl-2 outline-0 focus:bg-light-black bg-bold-black w-full border-[1px] border-second-black h-[50px] rounded-xl"
          />
          {/*@ts-ignore*/}
          {errors[info.value] && <span className="text-xs text-primary-pink">{errors[info.value]?.message}</span>}
         </div>
        ))}
       </div>
      </div>
     </div>
     <div className="flex flex-col justify-between items-start h-full gap-4 w-full">
      <div className="flex flex-col gap-4 pt-6">
       <h3 className="text-3xl font-normal text-white">Apply for GLI</h3>
       <Image src="/apply/step-2.svg" className="mt-2 -mb-6" alt="Step 1" width={380} height={70} />
       <p className="text-second-white text-base font-normal">Project Info</p>
       <p className="text-second-white text-base font-normal whitespace-pre-wrap">
        Sed mauris nisi, porttitor rutrum facilisis vel, aliquam in lectus. Integer aliquet interdum tortor, scelerisque viverra quam vehicula ac.
       </p>
      </div>
      <div className="flex flex-col justify-end h-full gap-4">
       <p className="text-second-white text-base font-normal">
        We will review your submissions within 48 hours. If your game potentially fits our platform, we will contact you through your provided email address or on Telegram to arrange a call.
       </p>
      </div>
      <button
       className={`${
        Object.keys(errors).length > 0 ? 'bg-light-black border-second-black' : 'bg-primary-pink border-[#EC7EFE]'
       } w-full border-[1px] max-w-[300px] rounded-lg py-3.5 flex items-center gap-2 justify-center`}
       type="submit"
      >
       {Object.keys(errors).length > 0 && <Image src="/apply/disabled.svg" alt="Disabled" width={14} height={14} />}
       <span className={`${Object.keys(errors).length > 0 ? 'text-second-black' : 'text-custom-white'} font-normal text-base`}>Submit My Project</span>
      </button>
     </div>
    </div>
   </form>
  </div>
 );
}
