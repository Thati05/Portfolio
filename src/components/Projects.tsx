"use client";

import React, { useEffect } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Bounded from './Bounded';
import portfolioProject from '../constants/index';
import ArrowUpRightIcon from '@/app/Icons/arrowupright.png';

export default function Projects() {
  useEffect(() => {
    console.log("Project data:", portfolioProject);
  }, []);

  return (
    <section className='pb-16 md:px-10 md:py-14 px-5 py-10 lg:py-24 flex place-content-center  '>
      <div className=" mt-10 place-content-center flex flex-col justify-center ">
        <p className="text-[#A3a3a3] uppercase text-center tracking-widest text-sm">Real-world Results</p>
        <h1 className="text-3xl md:text-5xl mt-3 text-[#262626] font-semibold text-center">Selected Work</h1>
        <p className="text-[#737373] text-center max-w-md mx-auto lg:text-xl  text-lg font-normal">
          See how I transformed concepts into engaging digital experiences
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20 justify-center ">
          {portfolioProject.map((project) => (
            <div 
              key={project.title} 
              className="bg-[#F5F5F5] rounded-3xl relative z-0 overflow-hidden after:z-10 after:absolute after:inset-0 after:content-[''] after:outline-1 after:outline-[#E6E6E6] after:outline after:-outline-offset-2 after:rounded-3xl px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className=' lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm tracking-wider font-light text-[#A3a3a3]">{project.year}</div>
                  <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                </div>
                <span className=' lg:hidden'>
                  {/* GitHub button */}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                        alt="GitHub Icon"
                        width={35}
                        height={35}
                      />
                    </button>
                  </a>
                </span>
              </div>
              <hr className=" bg-[#E6E6E6] mt-4 md:mt-5" />
              <div className="text-[#737373] mt-4 md:mt-5 text-sm md:text-base">{project.description}</div>

              {/* Render the appropriate button based on `live_site` value */}
              <div className= ' lg:flex lg:flex-row items-center lg:gap-5 '>

              <div>

              {project.live_site.trim() ? (
                <a href={project.live_site} target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 lg:w-auto px-6">
                    <span>Visit Live Site</span>
                    <Image src={ArrowUpRightIcon} alt="Arrow Up Right Icon" width={20} height={20} />
                  </button>
                </a>
              ) : (
                <a href={project.figma_design} target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 lg:w-auto px-6">
                    <span>Visit Figma Design</span>
                    <Image src={ArrowUpRightIcon} alt="Arrow Up Right Icon" width={20} height={20} />
                  </button>
                </a>
              )}
              </div>
                <span className=' mt-9 max-lg:hidden'>
                  {/* GitHub button */}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                        alt="GitHub Icon"
                        width={35}
                        height={35}
                        />
                    </button>
                  </a>
                </span>
                        </div>
              </div>
           
              {/* Video Display */}
              <div className=' relative'>

              {project.display && (
                <video 
                className="rounded-[12px]   lg:ml-4 -mb-4 mt-8  lg:mt-1 border lg:absolute lg:h-full  border-[#E6E6E6] lg:w-auto lg:max-w-none "
                autoPlay
                loop
                
                muted
                
                >
                  <source src={project.display} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> 
                 
                 
                )}
                </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
