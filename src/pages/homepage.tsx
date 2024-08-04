/** @format */

import {
  fadeIn,
  headerVariants,
  planetVariants,
  slide,
  slideIn,
  slideUp,
  staggerChildren,
} from '@/types/motion';
import { motion } from 'framer-motion';
import React from 'react';

const homepage = () => {
  return (
    <div
      className='flex flex-col justify-center h-screen p-20 text-white '
      style={{
        background: 'url(images/001.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left 20%',
        zIndex: '-100',
      }}>
      <motion.div
        variants={headerVariants}
        initial='hidden'
        whileInView='show'
        transition={{
          duration: 0.2,
          delay: 0.2,
          ease: 'easeInOut',
          loop: Infinity,
        }}
        viewport={{ once: false, amount: 0.5 }}>
        <motion.h1
          variants={slideIn('up', 'tween', 0.5, 0)}
          className='text-6xl font-extrabold py-2'>
          Ahoj, som Kristína Svoradová.
        </motion.h1>
        <motion.p
          className='text-2xl font-semibold pb-6 text-red-500'
          variants={slideIn('up', 'tween', 0.5, 0)}>
          Tvorca medialného obsahu
        </motion.p>

        <motion.p className='w-1/2 min-w-80'>
          Som kreatívna hlava s množstvom nápadov, ktoré sa snažím pretvoriť do videí. Tvoreniu
          amatérskych videí sa venujem približne 3 roky a stále ma to neprestalo baviť!
        </motion.p>
        <button className='bg-black opacity-75 p-4 my-8 w-36 rounded-xl hover:opacity-100 transition-all'>
          <a href='mailto:info@example.com'>Napíš mi.</a>
        </button>
      </motion.div>
    </div>
  );
};

export default homepage;
