import React from 'react';
import Image from 'next/image';

function CustomButton(props: any) {
 const { text, icon } = props;

 return (
  <button {...props} className="flex items-center gap-2 justify-center text-custom-white rounded-md bg-primary-pink py-2 px-[30px]">
   <Image width={16} height={16} src={icon} alt="" />
   <span className="font-light text-base">{text}</span>
  </button>
 );
}

export default CustomButton;
