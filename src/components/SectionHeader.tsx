import React from 'react'

type Props = {
  title:string;
  eyebrow:string;
  description:string;
}

export default function SectionHeader({title, eyebrow,description}: Props) {
  return (
    <>
    <p className="text-[#A3a3a3] uppercase text-center tracking-widest text-sm">
     {eyebrow}
      </p>
    <h1 className="text-3xl md:text-5xl mt-3 text-[#262626] font-semibold text-center">
     {title}
      </h1>
    <p className="text-[#737373] text-center max-w-md mx-auto lg:text-xl  text-lg font-normal">
      {description}
    </p>
    </>
  )
}