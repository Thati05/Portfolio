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
    <Bounded  ref={componentRef}>
    
 <Text  />

      
    </Bounded>
  );
}
