import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Logo() {
 return (
  <Link href="/" className="z-10">
   <Image src="/logo.svg" alt="Logo" width="153" height="43" className="cursor-pointer" />
  </Link>
 );
}

export default Logo;
