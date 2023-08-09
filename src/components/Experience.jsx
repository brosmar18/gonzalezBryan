import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { Wrapper } from '../hoc';

const ExperienceCard = ({ experience }) => {
  const imageUrl = experience.attributes?.image?.data?.attributes?.url;
  const companyName = experience.attributes?.company_name;
  const title = experience.attributes?.title;
  const description = experience.attributes?.description;

  // date logic
  const startDate = experience.attributes?.startDate;
  const endDate = experience.attributes?.endDate || experience.attributes?.Present;

  // parse description into an array of points
  const points = description.split('\n').map(point => point.replace('-', '').trim());

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={`${startDate} - ${endDate}`}
      iconStyle={{ background: '#383E56' }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={imageUrl}
            alt={companyName}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{companyName}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
          <li key={`job-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>

    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  async function getExperiences() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/experiences?populate=image`, { method: "GET" });

      const data = await response.json();

      const sortedExperiences = data.data.sort((a, b) =>
        new Date(b.attributes.startDate) - new Date(a.attributes.startDate)  // descending order
      );

      setExperiences(data.data);
    } catch (error) {
      console.log("Error fetching experiences", error);
    }
  }

  useEffect(() => {
    getExperiences();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


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