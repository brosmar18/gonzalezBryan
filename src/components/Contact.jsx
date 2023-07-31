import React from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { Wrapper } from '../hoc';
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
      </motion.div>
    </div>
  )
}

export default Wrapper(Contact, "contact");
