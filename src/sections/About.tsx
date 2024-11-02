"use client"
import { useState } from 'react';
import Card from '@/components/Card';
import Image from 'next/image';
import Bounded from '@/components/Bounded';
import CardHeader from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import Screencode from '@/app/Icons/screen_code.png'


export const toolboxItems = [
  { title: 'TypeScript', icon: '/assets/Icons/TypeScript.svg' },
  { title: 'Python', icon: '/assets/Icons/Python.svg' },
  { title: 'Three.js', icon: '/assets/Icons/Three.js.svg' },
  { title: 'React', icon: '/assets/Icons/React.svg' },
  { title: 'Next.js', icon: '/assets/Icons/Next.js.svg' },
  { title: 'Tailwind', icon: '/assets/Icons/Tailwind CSS.svg' },
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

type Props = {};

export default function About({}: Props) {
  const [copyEmail, setCopyEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("seitati01@gmail.com");
    setCopyEmail(true);
    setTimeout(() => setCopyEmail(false), 5000) //Reseting the button text after 5 seconds
  };





  return (
    <section id='about'>

    <Bounded className="py-10">
      <div className=' flex flex-col gap-8 '>

      <div className="flex flex-col gap-8 xl:flex-row  xl:gap-4">
  {/* Profile Section - 40% width on medium screens */}
  <Card className="h-[320px] w-full xl:flex-[0_0_40%]">
    <div className="flex flex-col gap-1 items-center">
      <div className="w-14 h-14 rounded-full bg-gray-200 inline-flex items-center justify-center flex-shrink-0">
        <Image
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
    <h3 className="mt-3 text-center font-semibold text-base">Hi, I'm Seithati Mokoena</h3>
    <div className="w-80 mx-auto mt-3">
      <p className="text-center text-sm mt-1">
        Hi! I am a front-end developer based in South Africa, passionate about designing beautiful,
        functional interfaces and bringing them to life through code. While I'm self-taught, I owe
        much of my journey to my Creator—and, of course, countless YouTube tutorials.
      </p>
    </div>
  </Card>

  {/* Toolbox Section - 60% width on medium screens */}
  <Card className="h-[320px] p-0 w-full xl:flex-[0_0_60%]">
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
    <div className="relative xl:flex-[0_0_40%] flex-1 ">
      {hobbies.map((hobby) => (
        <div
          key={hobby.title}
          className="inline-flex lg:relative  items-center gap-2 px-6 bg-white rounded-full border border-gray-300 py-1.5 absolute"
          style={{
            left: hobby.left,
            top: hobby.top
          }}
        >
          <span className="font-medium">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </div>
      ))}
    </div>
  </Card>

  {/* Additional Cards Section - 40% width on medium screens */}
  <div className="flex flex-col gap-4 h-[320px] lg:flex-[0_0_40%]">
    <Card className="flex items-center">
      <p className="text-base">Tech enthusiast with a passion for development</p>
      <div className="opacity-80 overflow-hidden w-40 mx-auto ml-8 absolute -mb-10 right-8">
        <Image
          className="relative h-full w-auto object-cover object-right-bottom max-w-none"
          width={100}
          src={Screencode}
          alt="Screen-code image"
        />
      </div>
    </Card>

    <Card className="flex flex-col items-center justify-center">
      <p>Do you want to start a new project together?</p>
      <div>
        {copyEmail ? (
          <button className="text-green-500">Email copied</button>
        ) : (
          <button className="text-blue-500" onClick={handleCopyEmail}>Copy email</button>
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

