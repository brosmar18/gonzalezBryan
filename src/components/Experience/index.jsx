import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../styles';
import { Wrapper } from '../../hoc';
import ExperienceCard from './ExperienceCard';
import useExperiences from '../../hooks/useExperiences';

const Experience = () => {
  const experiences = useExperiences();

  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__skills-item app__flex"
      >
        <p className={`${styles.sectionSubText} text-center`}>
          What I've done
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Job Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`job-experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Wrapper(Experience, "work");
