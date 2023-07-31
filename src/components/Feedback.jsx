import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { Wrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedback = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What clients are saying</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
    </div>
  )
}

export default Wrapper(Feedback, "");
