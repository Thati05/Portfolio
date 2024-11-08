import Bounded from '@/components/Bounded';
import Image from 'next/image';
import React from 'react';

const footerLinks = [
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/thati_ly_/'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/Thati05'
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/'
  }
];

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer>
      <Bounded className=' '>
        <div className='border-t gap-8 pt-5 border-gray-200 text-sm flex flex-col md:flex-row md:justify-between items-center'>
          <div className='text-gray-500'>
            &copy; 2024. All rights reserved
          </div>
          <nav className='flex md:flex-row flex-col items-center gap-8'>
            {footerLinks.map((link) => (
              <a className='inline-flex items-center gap-1.5' key={link.title} href={link.href}>
                <span className='font-semibold'>{link.title}</span>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/7312/7312623.png'
                  width={20}
                  height={20}
                  alt='arrowUpRight'
                />
              </a>
            ))}
          </nav>
        </div>
      </Bounded>
    </footer>
  );
}
