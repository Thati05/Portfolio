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
    <Bounded>
      <div className="container mt-10 h-screen">
        <p className="text-[#A3a3a3] uppercase text-center tracking-widest text-sm">Real-world Results</p>
        <h1 className="text-3xl mt-3 text-[#262626] font-semibold text-center">Selected Work</h1>
        <p className="text-[#737373] text-center text-lg font-normal">
          See how I transformed concepts into engaging digital experiences
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProject.map((project) => (
            <div 
              key={project.title} 
              className="bg-[#F5F5F5] rounded-3xl relative z-0 overflow-hidden p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm tracking-wider font-light text-[#A3a3a3]">{project.year}</div>
                  <h3 className="text-2xl mt-2">{project.title}</h3>
                </div>
                <span>
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
              <hr className="border-[#E6E6E6]/6 my-4" />
              <div className="text-[#737373] mt-4">{project.description}</div>

              {/* Render the appropriate button based on `live_site` value */}
              {project.live_site.trim() ? (
                <a href={project.live_site} target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>View Live Site</span>
                    <Image src={ArrowUpRightIcon} alt="Arrow Up Right Icon" width={20} height={20} />
                  </button>
                </a>
              ) : (
                <a href={project.figma_design} target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>View Figma Design</span>
                    <Image src={ArrowUpRightIcon} alt="Arrow Up Right Icon" width={20} height={20} />
                  </button>
                </a>
              )}

              {/* Video Display */}
              {project.display && (
                <video 
                  className="rounded-[12px] mt-8 border border-[#E6E6E6]"
                  controls
                  muted
                  width="600"
                >
                  <source src={project.display} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
