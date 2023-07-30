import React from 'react';
import {styles} from '../styles';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`abslute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <div />
          <div />
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
