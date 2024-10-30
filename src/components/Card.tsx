import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  children?: React.ReactNode
}

export default function Card({ className, children }: Props) {
  return (
    <div>
      <div 
        className={twMerge(
          "bg-[#F5F5F5] rounded-3xl relative z-0 overflow-hidden after:z-10 after:absolute after:inset-0 after:content-[''] after:outline-1 after:outline-[#E6E6E6] after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none p-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
