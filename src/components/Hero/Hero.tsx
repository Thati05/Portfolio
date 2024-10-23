import React from 'react';
import Text from './Text';

type Props = {};

export default function Hero({}: Props) {
  const name = "I'm Seithati";

  const renderLetters = (name: string) => {
    if (!name) return;
    return name.split('').map((letter, index) => (
      <span key={index} className={` name-animation name-animation-${name} opacity-0`} >
        {letter}
      </span>
    ));
  };

  return (
    <section>
      <div className="grid min-h-[70vh] grid-cols-1 items-center">
        {/* Text */}
        <div className="col-start-1 md:row-start-1">
          <h1 className=" hero-header block mb-8 text-[clamp(3rem,20vmin,20rem)] font-bold leading-none tracking-tighter">
            {renderLetters(name)}
          </h1>
          <div className=" hero-text grid grid-cols-2 gap-48 items-center">
            <div className="text-description text-xl font-normal">
              Hi! I am a front-end developer based in South Africa,
              passionate about designing beautiful,
              functional interfaces and bringing them
              to life through code. While I'm self-taught,
              I owe much of my journey to my Creator—and, of
              course, countless YouTube tutorials.
            </div>
            <div className=" hero-subtext quick-links text-xl font-normal">
              <div>
                <img
                  src="path_to_resume_icon.png"
                  alt="Resume Icon"
                  className="inline-block"
                />
                <span>If you want my resume</span>
              </div>
              <div>
                <img
                  src="path_to_chat_icon.png"
                  alt="Chat Icon"
                  className="inline-block"
                />
                <span>Or have a chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
