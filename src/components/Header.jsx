import React from 'react';
import MediaQuery from '../hooks/MediaQuery';
import {motion} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {styles} from '../styles';
import SocialsIcons from './SocialsIcons';

const Header = () => {

  const isAboveLarge = MediaQuery("(min-width: 1060px)");
  return (
    <section id='home' className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'>
      <div className='basic-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
        {isAboveLarge ? (
          <div>
            <img alt='profile' src="/profile.png" />
          </div>
        ) : (
          <img alt='profile' src="/profile.png" />
        )}
      </div>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Bryan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            full-stack Software Developer
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

    
        
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          transition={{ delay: 0.4, duration: 0.5}}
          variants={{
            hidden: {opacit: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}
        >
          <SocialsIcons />
        </motion.div>

      </div>
    </section>
  )
}

export default Header
