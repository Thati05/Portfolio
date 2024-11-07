"use client";

import Bounded from '@/components/Bounded';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import { useRef, useState } from 'react';
import ArrowUpRightIcon from '@/app/Icons/arrowupright.png';

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

      <div className="relative mt-10  min-h-screen flex items-center justify-center flex-col">
       
{/*Add object-cotain later */}
        <Image
          className="lg:px-20 flex w-full absolute inset-0 items-center min-h-screen object-fill  z-0"
          src="/assets/images/Group 1.png"
          alt="terminal background"
          layout='fill'
          
          />
         

        <div className="contact-container p-20 relative z-10">
          <form className=" mt-10 flex flex-col space-y-7" ref={formRef} onSubmit={handleSubmit}>
           
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                required
                placeholder='Joshua Sargon'
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                required
                placeholder='joshuasargon@gmail.com'
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="field-input"
                required
                rows={5}
                placeholder="Hi, I wanna give you a job..."
              />
            </label>

          <button className=' field-btn' type='submit' disabled={loading} >
            {loading ? 'Sending...': 'Send Message'} 
            <Image src={ArrowUpRightIcon}  width={20} height={20} alt='arrow-btn'/>

          </button>
          
          </form>
        </div>
      </div>
    </Bounded>
  );
}
