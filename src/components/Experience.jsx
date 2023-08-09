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
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{companyName}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {description}
        </li>
      </ul>
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