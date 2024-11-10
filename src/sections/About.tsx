"use client"
import { useRef, useState } from 'react';
import Card from '@/components/Card';
import Image from 'next/image';
import Bounded from '@/components/Bounded';
import CardHeader from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import techGuy from '@/app/Icons/techGuy.png'
import {motion} from 'framer-motion'



export const toolboxItems = [
  { title: 'TypeScript', icon:'/assets/Icons/TypeScript.svg' },
  { title: 'Python', icon: '/assets/Icons/Python.svg' },
  { title: 'Three.js', icon: '/assets/Icons/Three.js.svg' },
  { title: 'React', icon: '/assets/Icons/React.svg' },
  { title: 'Next.js', icon: '/assets/Icons/Next.js.svg' },
  { title: 'Tailwind', icon: '/assets/Icons/Tailwind CSS.svg' },
  { title: 'Django', icon: '/assets/Icons/Django.svg' },
  { title: 'Figma', icon: '/assets/Icons/Figma.svg' },
  { title: 'Blender', icon: '/assets/Icons/Blender.svg' },
  { title: 'Django REST', icon: '/assets/Icons/Django REST.svg' },
];

const hobbies = [
  { title: 'Playing Chess', emoji: '♟',left:'5%', top:"5%" },
  { title: 'Singing', emoji: '🎤',left:'50%', top:"5%" },
  { title: 'Running', emoji: '👟',left:'10%', top:"35%" },
  { title: 'Meditating', emoji: '🌼',left:'15%', top:"40%" },
  { title: 'Reading', emoji: '📚',left:'70%', top:"45%" },
  { title: 'Photography', emoji: '📷',left:'5%', top:"65%" },
  { title: 'Blogging', emoji: '⌨',left:'35%', top:"70%" },
];



export default function About() {
  const [copyEmail, setCopyEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("seitati01@gmail.com");
    setCopyEmail(true);
    setTimeout(() => setCopyEmail(false), 5000) //Reseting the button text after 5 seconds
  };

 const constrainRef = useRef(null);



  return (
    <section>

    <Bounded className="py-10">
      <div className=' flex flex-col gap-8 '>

      <div className="flex flex-col gap-8 xl:flex-row  xl:gap-4">
  {/* Profile Section - 40% width on medium screens */}
  <Card className="h-[320px] w-full xl:flex-[0_0_40%]">
    <div className="flex flex-col gap-1 items-center">
      <div className="w-14 h-14 rounded-full bg-gray-200 inline-flex items-center justify-center flex-shrink-0">
        <img
          className="rounded-full"
          src="/assets/images/Thati.jpg"
          width={50}
          height={50}
          alt="personal image"
        />
      </div>
      <div className="bg-gray-950 border border-gray-800 px-2 py-1 inline-flex items-center gap-2 rounded-lg">
        <div className="bg-green-500 size-2 rounded-full relative">
          <div className=' bg-green-500 absolute inset-0 animate-ping-large rounded-full'>

          </div>
        </div>
        <div className="text-xs font-medium text-white">Available for new projects</div>
      </div>
    </div>
    <h3 className="mt-3 text-center font-semibold text-base">Hi, I&apos;m Seithati Mokoena</h3>
    <div className="w-80 mx-auto mt-3">
      <p className="text-center max-md:mr-5 text-sm mt-1">
        I am a self-taught software developer based in South Africa, passionate about designing beautiful,
        functional interfaces and bringing them to life through code.
      </p>
    </div>
  </Card>

  {/* Toolbox Section - 60% width on medium screens */}
  <Card className="h-[320px] xl:flex-[0_0_60%] flex flex-col p-0">
    <CardHeader
      className="px-7 pt-7"
      title="Tool box"
      description="Explore the technologies and tools I use to craft exceptional digital experiences."
    />
    <ToolboxItems className="mt-6" items={toolboxItems}  itemsWrapperClassName='animate-move-left [animation-duration:30s]' />
    <ToolboxItems className="mt-6" itemsWrapperClassName=" animate-move-right  [animation-duration:15s]" items={toolboxItems} />
  </Card>
</div>


<div className="flex flex-col gap-8 md:flex-row md:gap-4">
  {/* Hobbies Section - 60% width on medium screens */}
  <Card className="h-[320px] p-0 xl:flex-[0_0_60%] flex flex-col">
    <CardHeader
      className="px-7 py-7"
      title="Beyond the code"
      description="Explore my interests and hobbies beyond the code"
    />
    <div className="relative xl:flex-[0_0_50%] flex-1 cursor-pointer  " ref={constrainRef}>
      {hobbies.map((hobby) => (
        <motion.div
          key={hobby.title}
          className="inline-flex lg:relative  items-center gap-2 px-6 bg-white rounded-full border border-gray-300 py-1.5 absolute"
          style={{
            left: hobby.left,
            top: hobby.top
          }}
          drag
          dragConstraints={constrainRef}
        >
          <span className="font-medium">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
  </Card>

  {/* Additional Cards Section - 40% width on medium screens */}
  <div className="flex flex-col gap-4 h-[320px] lg:flex-[0_0_40%]">
    <Card className="flex gap-5  items-center h-[152px] md:w-[477px]">
      <p className="text-base">Tech enthusiast with a passion for development</p>
      <div className="opacity-80 overflow-hidden w-40 mx-auto ml-8 absolute -mb-10 right-8">
        <Image
          className="relative lg:ml-3 h-full w-auto object-cover object-right-bottom max-w-none"
          width={170}
          src={techGuy}
          alt="techGuy image"
        />
      </div>
    </Card>

    <Card className="flex flex-col h-[152px]  md:w-[477px] items-center justify-center">
      <p>Do you want to start a new project together?</p>
      <div className=' mt-5'>
        {copyEmail ? (
          <button className="text-green-500">Email copied</button>
        ) : (
          <button className=" copy-btn" onClick={handleCopyEmail}>Copy email</button>
        )}
      </div>
    </Card>
  </div>
</div>
</div>
    </Bounded>
                </section>
  );
}

