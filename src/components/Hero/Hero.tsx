"use client";

import React, { useRef } from 'react';
import Bounded from '../Bounded';
import Text from '../Hero/Text';


// Hero Component
export default function Hero() {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <Bounded ref={componentRef}>
      <Text />
    </Bounded>
  );
}