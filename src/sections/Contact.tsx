"use client";

import Bounded from '@/components/Bounded';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import { useRef, useState } from 'react';

type Props = {};

export default function Contact({}: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = () => {
   
  };

  const handleSubmit = () => {};

  return (
    <Bounded>
      <SectionHeader 
        eyebrow="Communication" 
        title="Let's Connect" 
        description="I'm excited to explore how we can create exceptional results together. Reach out to discuss potential opportunities." 
      />

      <div className="relative mt-10 min-h-screen flex items-center justify-center flex-col">
        <Image
          className="absolute inset-0 items-center min-h-screen object-contain z-0"
          src="/assets/images/terminal.png"
          alt="terminal background"
          layout='fill'
         
        />

        <div className="contact-container relative z-10">
          <form className="mt-12 flex flex-col space-y-7" ref={formRef} onSubmit={handleSubmit}>
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>

          </form>
        </div>
      </div>
    </Bounded>
  );
}
