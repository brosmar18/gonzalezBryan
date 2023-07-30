import React from 'react';
import MediaQuery from '../hooks/MediaQuery';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import SocialsIcons from './SocialsIcons';

const Header = () => {

  const isAboveLarge = MediaQuery("(min-width: 1060px)");
  return (
    <section id='home' className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div>
            <img alt='profile' src="/profile.png" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" />
          </div>
        ) : (
          <img alt='profile' src="/profile.png" className="z-10 w-full max-w-[400px] md:max-w-[600px]" />
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
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
          <h1 className={`${styles.heroHeadText} text-white z-10 text-center`}>
            Hi, I'm <span className='text-[#915EFF]'>Bryan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
            full-stack Software Developer
          </p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialsIcons />
        </motion.div>

      </div>
      <div>
        <a href='#about'>
          <div>
            <motion.div
              animate={{ y: [0, 24, 0]}}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            >

            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Header
