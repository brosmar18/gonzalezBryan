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

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={`${experience.attributes?.startingDate} - ${experience.attributes?.endDate}`}
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

    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>

    </>
  );
};

export default Wrapper(Experience, "work");