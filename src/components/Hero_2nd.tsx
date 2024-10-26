"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Bounded from "./Bounded";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero_2nd() {
  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      const ctx = gsap.context(() => {
        // Scroll-triggered animation for `.name-animation` only
        gsap.timeline({
          scrollTrigger: {
            trigger: ".beneth_mesh",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }).fromTo(
          ".name-animation",
          {
            x: -100,
            opacity: 0,
            rotate: -10,
            transformOrigin: "left top",
          },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1, 0.3)",
            duration: 1,
            stagger: { each: 0.05, from: "random" },
          }
        );
      }, componentRef);

   

      const scrollTL2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".beneth_mesh",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      scrollTL2
        .fromTo(
          ".text-description",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        )
        .fromTo(
          ".resume-link, .contact-link",
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.5 }
        );

      

      return () => ctx.revert();
    }
  }, [componentRef]);

  const iam = "I'm";
  const lastName = "Seithati";

  const renderLetters = (name: string) =>
    name.split("").map((letter, index) => (
      <span key={index} className="name-animation" style={{ display: "inline-block" }}>
        {letter}
      </span>
    ));

  return (
    <section ref={componentRef} className="h-max hero-2 px-4 md:px-6">
      <div className="col-start-1 md:row-start-1">
        <h1 className="hero-header block mb-8 text-[clamp(2rem,18vmin,20rem)] font-bold leading-none tracking-tighter">
          {renderLetters(iam)}
          <span style={{ display: "inline-block", width: "1rem" }}></span>
          {renderLetters(lastName)}
        </h1>
        <div className="hero-text grid grid-cols-2 max-md:grid-cols-1 gap-48 max-md:gap-10 items-center">
          <div className="text-description text-xl font-normal">
            Hi! I am a front-end developer based in South Africa, passionate about designing beautiful, functional interfaces and bringing them to life through code. While I'm self-taught, I owe much of my journey to my Creator—and, of course, countless YouTube tutorials.
          </div>
          <div className="hero-subtext quick-links flex flex-col max-md:justify-center max-md:text-center max-md:items-center text-xl font-normal">
            <div className="resume-link mb-7 flex gap-2 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10317/10317170.png"
                width={30}
                alt="Resume Icon"
                className="object-contain"
              />
              <span>If you want my resume</span>
            </div>
            <div className="contact-link gap-2 flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9634/9634853.png"
                width={35}
                alt="Coffee Icon"
                className="object-contain"
              />
              <span>Or have a chat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
