import Star from '@/app/Icons/star.png';
import Image from 'next/image';
import { Fragment } from 'react';

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
        className='-rotate-3 -mx-1 border-[1px] border-gray-300 '
        style={{/*
          background: `linear-gradient(to right, black, gray, black , gray ,black)`,
        */}}
      >
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        <div className="flex flex-none pr-4 gap-4 py-3 animate-move-left [animation-duration:30s]">
            {[...Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word, index) => (
                  <div key={`${word}-${index}`} className="inline-flex gap-4 items-center">
                    <span>{word}</span>
                    <Image
                      className="-rotate-12"
                      src={Star}
                      width={24}
                      height={24}
                      alt="Star Icon"
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
      
        </div>
        </div>
      </div>
    
  );
}
