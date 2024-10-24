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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate each individual letter
      tl.fromTo(
        '.name-animation', 
        {
          x: -100,
          opacity: 0,
          rotate: -90, // Start with noticeable rotate
          transformOrigin: 'center center',
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: 'elastic.out(1, 0.3)', // Elastic bounce effect
          duration: 1,
          stagger: {
            each: 0.2,
            from: 'random', // Random stagger for letters
          },
        }
      );
    }, componentRef); // Context applied to componentRef

    // Scroll-triggered animation setup
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-header .hero-subtext',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        // markers: true
      },
    });

    scrollTL
      .fromTo(
        '.text-description',
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        }
      )
      .fromTo(
        '.resume-link, .contact-link',
        {
          x: -20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.5,
        }
      );

    // Cleanup gsap context on unmount
    return () => ctx.revert();
  }, []);

  const iam = "I'm";
  const lastName = 'Seithati';

  const renderLetters = (name: string) => {
    return name.split('').map((letter, index) => (
      <span key={index} className="name-animation" style={{ display: 'inline-block' }}>
        {letter}
      </span>
    ));
  };

  return (
    <Bounded className="hero relative" ref={componentRef}>
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        {/* Canvas on top */}
        <Text />

        {/* Heading and paragraphs */}
        <div className="col-start-1 md:row-start-1">
          <h1 className="hero-header block mb-8 text-[clamp(3rem,20vmin,20rem)] font-bold leading-none tracking-tighter">
            {renderLetters(iam)}
            <span style={{ display: 'inline-block', width: '1rem' }}></span> {/* Add gap */}
            {renderLetters(lastName)}
          </h1>
          <div className="hero-text grid grid-cols-2 max-md:grid-cols-1 gap-48 max-md:gap-10 items-center">
            <div className="text-description text-xl font-normal">
              Hi! I am a front-end developer based in South Africa, passionate about designing beautiful, functional interfaces and bringing them to life through code. While I'm self-taught, I owe much of my journey to my Creator—and, of course, countless YouTube tutorials.
            </div>
            <div className="hero-subtext quick-links text-xl font-normal">
              <div className="resume-link">
                <img src="path_to_resume_icon.png" alt="Resume Icon" className="inline-block" />
                <span>If you want my resume</span>
              </div>
              <div className="contact-link">
                <img src="path_to_chat_icon.png" alt="Chat Icon" className="inline-block" />
                <span>Or have a chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
