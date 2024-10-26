import React from 'react';
import Bounded from './Bounded';
import portfolioProject from '../constants/index';

export default function Projects() {
  return (
    <Bounded>
      <div className="container h-screen">
        <p className="text-[#A3a3a3] text-sm">Real-world Results</p>
        <h1 className="text-3xl mt-3 text-[#262626] font-semibold">Selected Work</h1>
        <p className="text-[#737373] text-lg font-normal">
          See how I transformed concepts into engaging digital experiences
        </p>
        <div>
          {portfolioProject.map((project) => (
            <div key={project.title}>
              <div>{project.year}</div>
              <h3>{project.title}</h3>
              <hr />
              <div>{project.description}</div>
              <div>
             {/* Render the appropriate button based on `live_site` value */}
              {project.live_site.trim() ? (
                <a href={project.live_site}>
                  <button>View Live Site</button>
                </a>
              ) : (
                <a href={project.figma_design}>
                  <button>View Figma Design</button>
                </a>
              )}
              {/*GitHub button */}
              <a href={project.github}>
              <button className="p-2 bg-gray-100 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"
              alt="Icon"
              width={20}
              height={20}
            />
          </button>
              </a>

              </div>
              <video/>


            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
