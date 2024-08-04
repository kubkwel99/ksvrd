/** @format */

import { headerVariants } from '@/types/motion';
import { motion, useTransform } from 'framer-motion';
import React from 'react';

const aboutpage = () => {
  return (
    <>
      <div
        className='flex flex-col h-screen items-center justify-center bg-gray-300'
        style={{
          boxShadow: 'inset 0 7px 19px -7px black',
        }}>
        <a
          className='anchor absolute'
          style={{
            top: '105%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          id='about'></a>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={headerVariants}
          viewport={{ once: false, amount: 0.15 }}
          className='flex flex-col text-black  md:flex-row items-center justify-center gap-20 p-20 text-center'>
          <div className='max-w-80'>
            <img
              src='https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-1/349147098_6355272967895631_6502314693999048499_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=kCpAlsQT5gMQ7kNvgExBbi1&_nc_ht=scontent-fra3-2.xx&oh=00_AYBEsbV4SpyXJ4IyG7hiNWeDqsBkBv7fXuy6DgLdgtH3AA&oe=66B52089'
              alt=''
              className='drop-shadow-2xl'
            />
          </div>
          <div className='flex flex-col sm:w-2/4 '>
            <h1 className='text-4xl pb-4'>Kristína Svoradová</h1>
            <h2 className='text-2xl pb-2'>Content Creator </h2>
            <p className=''>
              Stačí mi dať tému, produkt alebo myšlienku a ja všetko krok za krokom pretvorím v
              hotový výstup, ktorý vám odovzdám.</p>
              <p>Na svojej tvorbe si potrpím, aby boli moji odberatelia spokojní.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={headerVariants}
          viewport={{ once: false, amount: 0.55 }}
          className='sm:w-3/4 max-w-screen-md'>
          <div className='flex w-full sm:items-center justify-between px-16 py-2 gap-6 rounded-md'>
            <a href='https://www.facebook.com/kika.svoradova?locale=sk_SK'>
              <i className='text-4xl fa-brands fa-facebook hover:scale-110 transition-all'></i>
            </a>
            <a href='https://www.instagram.com/svoradova.k/'>
              <i className='text-4xl fa-brands fa-instagram hover:scale-110 transition-all'></i>
            </a>
            <a href='https://www.tiktok.com/@krsvrd'>
              <i className='text-4xl fa-brands fa-tiktok hover:scale-110 transition-all'></i>
            </a>
            <a href='mailto:kika.svoradova26@gmail.com'>
              <i className='text-4xl fa-solid fa-envelope hover:scale-110 transition-all'></i>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='show'
          variants={headerVariants}
          viewport={{ once: false, amount: 0.65 }}
          className='flex flex-row gap-20 py-20 '>
          <button className='hover:scale-110 transition-all'>
            <a
              className='p-2 px-4 bg-white rounded-xl font-semibold shadow-gray-400 shadow-md'
              href='mailto:kika.svoradova26@gmail.com'>
              Napíš mi...
            </a>
          </button>

          <button className='hover:scale-110 transition-all'>
            <a
              className='p-2 px-4 bg-white rounded-xl font-semibold shadow-gray-400 shadow-md'
              href='/items/kristina-svoradova-sk-cv.pdf' download>
              Moje CV
            </a>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default aboutpage;
function useViewportScroll(): { scrollYProgress: any } {
  throw new Error('Page not Found. 404');
}
