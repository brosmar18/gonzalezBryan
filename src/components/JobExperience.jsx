import React, {useEffect, useState} from 'react';
import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { Wrapper } from '../hoc';

const JobExperience = () => {
  const [experiences, setExperiences] = useState([]);

  async function getExperiences() {
    try {
      const response = await fetch('http://localhost:1337/api/experiences?populate=image', { method: "GET"});
      const data = await response.json();
      setExperiences(data.data);
      console.log(data.data)
    } catch (error) {
      console.log("Error fetching experiences", e);
    }
  }

  useEffect(() => {
    getExperiences();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Job Experience</h1>
    </div>
  )
}

export default JobExperience
