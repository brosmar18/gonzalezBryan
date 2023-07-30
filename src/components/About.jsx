import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { Wrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Javascrict, HTML, CSS, and exprtise in frameworks like React, Node.js, Next.js, and Three.js. I collaborate closely with clients to create efficient, scalable, and user-friendly solutions to real-world tech problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  )
}

export default Wrapper(About, "about");
