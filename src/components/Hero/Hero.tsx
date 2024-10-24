'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Bounded from '../Bounded';
import Text from '../Hero/Text';

type Props = {};

// Hero Component
export default function Hero({}: Props) {
  const component = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate each individual letter
      tl.fromTo(
        ".name-animation", // Target individual letter spans
        {
          x: -100,
          opacity: 0,
          rotate: -90,  // Start with a more noticeable rotate value
          transformOrigin: 'center center', // Ensure transform-origin is applied
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,  // Rotate back to normal
          ease: "elastic.out(1, 0.3)", // Elastic ease for a bounce effect
          duration: 1, // Duration of animation
          stagger: {
            each: 0.2, // Stagger timing between each letter animation
            from: "random",
          },
        }
      );

      tl.fromTo(".text-description", {
        y: 20,
        opacity: 0,
      }, {
        opacity: 1,
        y: 0,
      }).fromTo(".resume-link, .contact-link", {
        x: -20,
        opacity: 0,
      }, {
        opacity: 1,
        x: 0,
        stagger: 0.5,
      });
    }, component);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const iam = "I'm";
  const lastName = "Seithati";

  const renderLetters = (name: string) => {
    if (!name) return null;
    return name.split('').map((letter, index) => (
      <span key={index} className="name-animation" style={{ display: 'inline-block' }}>
        {letter}
      </span>
    ));
  };

  return (
    <Bounded className='hero relative' ref={component}> 
      <div className=" flex flex-col justify-center items-center min-h-[70vh] ">

        {/** Canvas on top */}
        <Text  /> 

        {/* Heading and paragraphs */}
        <div className="col-start-1 md:row-start-1"> 
          <h1 className="hero-header block mb-8 text-[clamp(3rem,20vmin,20rem)] font-bold leading-none tracking-tighter">
            {renderLetters(iam)}
            <span style={{ display: 'inline-block', width: '1rem' }}></span> {/* Add gap */}
            {renderLetters(lastName)}
          </h1>
          <div className="hero-text grid grid-cols-2 max-md:grid-cols-1 gap-48 max-md:gap-10 items-center">
            <div className="text-description text-xl font-normal">
              Hi! I am a front-end developer based in South Africa,
              passionate about designing beautiful,
              functional interfaces and bringing them
              to life through code. While I'm self-taught,
              I owe much of my journey to my Creator—and, of
              course, countless YouTube tutorials.
            </div>
            <div className="hero-subtext quick-links text-xl font-normal">
              <div className='resume-link'>
                <img
                  src="path_to_resume_icon.png"
                  alt="Resume Icon"
                  className="inline-block"
                />
                <span>If you want my resume</span>
              </div>
              <div className='contact-link'>
                <img
                  src="path_to_chat_icon.png"
                  alt="Chat Icon"
                  className="inline-block"
                />
                <span>Or have a chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
