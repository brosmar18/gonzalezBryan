import React from 'react';
import {styles} from '../styles';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`abslute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915Eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1>
            Hi, I'm 
            <span>Bryan</span>
          </h1>
          <p>
            Full-Stack Software Developer
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
