import React, {useState, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { styles } from '../styles';
import { Wrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

{ /* 

  async function getProjects() {
    try {
      const response = await fetch('http://localhost:1337/api/projects?populate=image', { method: "GET"});
      const data = await response.json();

      setProjects(data.data);
      console.log(data.data);
    } catch (e) {
      console.log("Error fetching projects", e);
    }
  }

  useEffect(() => {
    getProjects();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

*/}
const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  )
}

export default Projects;
  