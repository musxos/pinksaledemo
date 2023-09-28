import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';

function classNames(...classes: any) {
 return classes.filter(Boolean).join(' ');
}

interface IPropTypes {
 items: Array<any>;
 renderKey: any;
 onChange: any;
 selected: any;
 defaultText: string;
}

export default function CustomSelect({ items, renderKey, onChange, selected, defaultText }: IPropTypes) {
 return (
  <Listbox value={selected} onChange={onChange}>
   {({ open }) => (
    <>
     <div className="relative mt-2 text-white w-full border-[1px] border-light-black rounded-lg px-6 py-2 h-full">
      <Listbox.Button className="relative flex items-center justify-between w-full">
       <span className="ml-3 block truncate">{selected?.[renderKey] || defaultText}</span>
       <Image src="/dropdown-icon.svg" alt="" width={10} height={5} />
      </Listbox.Button>

      <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
       <Listbox.Options className="absolute z-10 mt-1 left-0 top-10 max-h-56 w-full overflow-auto rounded-md bg-input py-1 text-base focus:outline-none sm:text-sm">
        {items.map((item: any, index) => (
         <Listbox.Option key={index} className={({ active }) => classNames(active ? 'bg-primary-pink text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-4')} value={item}>
          {({ selected, active }) => <span className="text-custom-white">{item[renderKey]}</span>}
         </Listbox.Option>
        ))}
       </Listbox.Options>
      </Transition>
     </div>
    </>
   )}
  </Listbox>
 );
}
