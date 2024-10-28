import Star from '@/app/Icons/star.png';
import Image from 'next/image';

const words = [
  "Innovative",
  "meticulous",
  "adaptable",
  "collaborative",
  "efficient",
  "problem-solver",
  "design-focused",
  "motivated",
  "reliable",
  "tech-savvy",
];

export default function Tape() {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div
        className='-rotate-3 -mx-1 border-[1px] border-gray-500 '
        style={{/*
          background: `linear-gradient(to right, black, gray, black , gray ,black)`,
        */}}
      >
        <div className=' flex [mask-image: linear-gradient(to_right, transparent,black_10%, black_90%,transparent)]'>

        <div  className=" flex flex-none gap-4 py-3 ">

        {words.map((word, index) => (
          <div key={`${word}-${index}`} className="inline-flex gap-4 items-center">
            <span className=" ">{word}</span>
            <Image className=' -rotate-12' src={Star} width={24} height={24} alt="Star Icon" />
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  );
}
