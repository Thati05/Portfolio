"use client";

import Bounded from '@/components/Bounded';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import { useRef, useState, ChangeEvent, FormEvent } from 'react';
import ArrowUpRightIcon from '@/app/Icons/arrowupright.png';
import emailjs from '@emailjs/browser';
 import { useAlert } from '@/hooks/useAlert';
 import Alert from '@/components/Alert';


type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { alert, showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_pw6lwxx',
        'template_noaxb7b',
        {
          from_name: form.name,
          to_name: 'Seithati',
          from_email: form.email,
          to_email: 'm.seithati01@gmail.com',
          message: form.message,
        },
        'jCKPsIZCUbiBEwjnO'
      );

      setLoading(false);
      showAlert({ text: 'Thank you for your message 😃', type: 'success' });
      setForm({ name: '', email: '', message: '' });

      setTimeout(() => hideAlert(), 3000);
    } catch (error) {
      setLoading(false);
      console.error(error);

      showAlert({ text: "I didn't receive your message 😢", type: 'danger' });
    }
  };


  return (
    <Bounded>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <SectionHeader
        eyebrow="Communication"
        title="Let's Connect"
        description="I'm excited to explore how we can create exceptional results together. Reach out to discuss potential opportunities."
      />

      <div className="relative mt-10 min-h-screen flex items-center justify-center flex-col">
        <Image
          className="lg:px-20 flex w-full absolute inset-0 items-center min-h-screen object-fill z-0"
          src="/assets/images/Group 1.png"
          alt="terminal background"
          layout="fill"
        />

        <div className="contact-container p-20 relative z-10">
          <form className="mt-10 flex flex-col space-y-7" ref={formRef} onSubmit={handleSubmit}>
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                required
                placeholder="Joshua Sargon"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                required
                placeholder="joshuasargon@gmail.com"
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

            <button className="field-btn " type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <Image src={ArrowUpRightIcon} width={20} height={20} alt="arrow-btn" />
            </button>
            
          </form>
        </div>
      </div>
    </Bounded>
  );
}
