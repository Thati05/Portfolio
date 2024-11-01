import React from 'react';
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
  { title: 'Meditating', emoji: '🌼',left:'35%', top:"40%" },
  { title: 'Reading', emoji: '📚',left:'70%', top:"45%" },
  { title: 'Photography', emoji: '📷',left:'5%', top:"65%" },
  { title: 'Blogging', emoji: '⌨',left:'45%', top:"70%" },
];

type Props = {};

export default function About({}: Props) {
  return (
    <section id='about'>

    <Bounded className="py-10">
      <div className=' flex flex-col gap-8 '>

        <Card className="h-[320px]">
          <div className="flex flex-col gap-1 items-center">
            <div  className="w-14 h-14 rounded-full bg-gray-200 inline-flex items-center justify-center flex-shrink-0">

            <Image
              className="rounded-full"
              src="/assets/images/Thati.jpg"
              width={50}
              height={50}
              alt="personal image"
              />
              </div>
            <div className="bg-gray-950 border border-gray-800 px-2 py-1 inline-flex items-center gap-2 rounded-lg">
              <div className="bg-green-500 size-2 rounded-full"></div>
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

        {/* Toolbox Section */}
        <Card className='  h-[320px] p-0'>
          <CardHeader className='px-7 pt-7' title="Tool box" description="Explore the technologies and tools I use to craft exceptional digital experiences." />
          <ToolboxItems className=' mt-6' items={toolboxItems} />
          <ToolboxItems className='mt-6 ' 
           itemsWrapperClassName='-translate-x-1/2'
          items={toolboxItems} />
        </Card>

        {/* Hobbies Section */}
        <Card className=' h-[320px] p-0 flex flex-col'>
          <CardHeader
          className='px-7 py-7'
          title="Beyond the code" description="Explore my interests and hobbies beyond the code" />
          <div className=' relative flex-1'>
            {hobbies.map((hobby) => (
              <div key={hobby.title} className=" inline-flex items-center gap-2 px-6 bg-white rounded-full border border-gray-300 py-1.5 absolute"
              style={{
                left:hobby.left,
                top:hobby.top
              }}
              >
                <span className=' font-medium'>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Additional Cards */}
        <div className="flex flex-col gap-2 h-[320px] ">
          <Card className=' flex items-center '>
            <p className=' text-base '>Tech enthusiast with a passion for development</p>
            <div className='  opacity-80 overflow-hidden w-40 mx-auto ml-8 absolute -mb-10 right-8' >
              


            <Image className=' lg:relative lg:h-full lg:w-auto lg:max-w-none' width={200}  src={Screencode} alt='Screen-code image '/>
             
            </div>
          </Card>

          <Card className=' flex flex-col items-center justify-center'>
            <p>Do you want to start a new project together?</p>

            <div>
              {/*Add code thhat will allow user to copy my emial here "seithati01@gmail.com" */}
             <button>Copy email</button>
            </div>
          </Card>
        </div>
      </div>
    </Bounded>
                </section>
  );
}

