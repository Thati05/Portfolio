import React from 'react'
import Card from '@/components/Card'
import StarIcon from '@/app/Icons/star.png'
import Image from 'next/image'





 const toolboxItems = [
  {
    title:'TypeScript',
    icon:"/assets/Icons/TypeScript.svg",
  },
  {
    title:'Python',
    icon:"/assets/Icons/Python.svg",
  },
  {
    title:'Three.js',
    icon:"/assets/Icons/Three.js.svg",
  },
  {
    title:'React',
    icon:"/assets/Icons/React.svg",
  },
  {
    title:'Next.js',
    icon:"/assets/Icons/Next.js.svg",
  },
  {
    title:'Tailwind',
    icon:"/assets/Icons/Tailwind CSS.svg",
  },
 ]













type Props = {}

export default function About({}: Props) {
  return (
   <div className='pb-96'>

    <Card>
      <div>
        <div className=' flex flex-col gap-1 items-center'>

        <Image className=' rounded-full'  src='/assets/images/gerard.png' width={50} height={50} alt='personal image' />
     
     <div className=' bg-gray-950 border border-gray-800 px-2 py-1 inline-flex items-center gap-2 rounded-lg'>
      <div className=' bg-green-500 size-2 rounded-full '></div>
      <div className=' text-xs font-medium text-white' >Available for new projects</div>
     </div>

        </div>


     <h3 className=' font-semibold text-base text-start'>Hi, I'm Seithati Mokoena</h3>
     <p className=' text-sm mt-1'>
     With 2 years exprience, I have homed my skills in both frontend and backend dev, creating dynmamic and responsive websites.
     </p>
     
      </div>

    </Card>

{/*Tool box */}
    <Card>
      <div>

      <Image src={StarIcon} alt='star-icon' width={25} />
      <h3>My tool box</h3>
      <p>Explore the technologies and tools I use to craft exceptional digital expriences. </p>
      </div>

      <div>
      {toolboxItems.map(item => (
        <div key={item.title} >
          <span><Image width={25} height={25} src={item.icon} alt='toolbox icons' /></span>
          <span>{item.title}</span>

        </div>
      ))}
      </div>

    </Card>

   </div>
  )
}