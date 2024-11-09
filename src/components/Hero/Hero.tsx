'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import Bounded from '../Bounded';
import Text from '../Hero/Text';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


// Hero Component
export default function Hero() {
  const componentRef = useRef<HTMLDivElement | null>(null);

 
 

  return (
    <Bounded className="hero flex-col min-h-screen w-full flex relative" ref={componentRef}>
    
 <Text  />

      
    </Bounded>
  );
}
