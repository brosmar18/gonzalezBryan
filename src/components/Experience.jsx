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
   
  );
};

const Experience = () => {
  return (
    <>
      
    </>
  );
};

export default Wrapper(Experience, "work");