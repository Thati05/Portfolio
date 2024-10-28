'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Bounded from '../Bounded';
import Text from '../Hero/Text';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

type Props = {};

// Hero Component
export default function Hero({}: Props) {
  const componentRef = useRef<HTMLDivElement | null>(null);

 
 

  return (
    <Bounded className="hero relative" ref={componentRef}>
      <div className="flex  flex-col justify-center items-center">
        {/* Canvas on top */}
        <Text  />
        {/*To Ensuring that gsap animations begin at the correct position  */}
        <div className=' over z-10 absolute p-20'>
          <div className='beneth_mesh   p-20'>

          </div>
       

        </div>



        
              
   
      </div>
      
    </Bounded>
  );
}
