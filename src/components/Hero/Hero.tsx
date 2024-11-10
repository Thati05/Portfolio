"use client";

import React, { useRef } from 'react';
import Bounded from '../Bounded';
import Text from './Text';



// Hero Component
export default function Hero() {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Bounded ref={componentRef}>
      <div className="w-[96.8svw] top-0 z-50 sticky max-md:h-[30vh] row-span-1 row-start-1 h-[70vh] -mt-9">
        
      <Text />
      </div>
    </Bounded>
  );
}