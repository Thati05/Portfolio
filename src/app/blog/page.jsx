"use client"
import blogContent from '@/constants/blog';
import Bounded from '@/components/Bounded';
import SectionHeader from '@/components/SectionHeader';
import ContentList from '@/sections/ContentList'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Blog = () => {
  return (
    <Bounded>
      {/* Fullscreen layout for centering header and placing Scroll Down at the bottom */}
      <div className="relative  flex-col flex justify-center items-center">
        {/* Section Header */}
       

        <SectionHeader
          eyebrow="Welcome to My Blog"
          title="My Journey in Code & Design"
          description="Explore the milestones, lessons, and projects that have shaped my passion for creating through technology and art."
        />
        

        {/* Scroll Down */}
        <div className="absolute  hidden lg:flex  flex-col items-center bottom-4 right-4">
        <DotLottieReact
      src="https://lottie.host/60e3c6f1-89a0-4087-a4d7-aef0eba3707d/4cSY1NYH2L.lottie"
      loop
      autoplay
      width={30}
      height={30}
      className=' object-contain'
    />
     <span className="text-sm text-gray-500">Scroll Down</span>
        </div>
      </div>

      {/* Blog Content */}
      <ContentList items={blogContent} />
    </Bounded>
  );
};

export default Blog;
