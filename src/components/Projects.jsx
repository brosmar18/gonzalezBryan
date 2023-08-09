import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { styles } from '../styles';
import { Wrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const ProjectCard = () => {
    return (
        <motion.div>
            <h1>Project Card</h1>
        </motion.div>
    )
}


const Projects = () => {
    const [projects, setProjects] = useState([]);

    async function getProjects() {
        try {
            const response = await fetch('http://localhost:1337/api/projects?populate=image', { method: "GET" });
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


    return (
        <>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
            >
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
            </motion.div>
            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    The projects featured here provide a comprehensive representation of my capabilities and experience, serving as tangible demonstrations of my work. Each project comes with a succinct description, alongside links to the corresponding code repositories and live demos. These projects collectively highlight my proficiency in tackling intricate problems, utilizing various technologies, and ensuring effective project management.
                </motion.p>
            </div>

        </>
    )
}
export default Wrapper(Projects, "");
