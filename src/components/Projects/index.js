import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Wrapper } from '../../hoc';
import ProjectCard from './ProjectCard';
import Filters from './Filters';
import useProjects from '../../hooks/useProjects';

const Projects = () => {
    const projects = useProjects();
    const [selectedTechnology, setSelectedTechnology] = useState('All');
    const [showFilters, setShowFilters] = useState(false);

    // generate a list of unique technologies
    const uniqueTechnologies = ['All', ...new Set(projects.flatMap(project => project.attributes.project_technologies.data.map(tech => tech.attributes.name)))];

    // filter projects based on selected tech
    const filteredProjects = selectedTechnology === 'All' ? projects : projects.filter(project => project.attributes.project_technologies.data.some(tech => tech.attributes.name === selectedTechnology));

    return (
        <>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
            >
                <p className={`sectionSubText`}>My work</p>
                <h2 className={`sectionHeadText`}>Projects</h2>
            </motion.div>
            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    The projects featured here provide a comprehensive representation of my capabilities and experience, serving as tangible demonstrations of my work. Each project comes with a succinct description, alongside links to the corresponding code repositories and live demos. These projects collectively highlight my proficiency in tackling intricate problems, utilizing various technologies, and ensuring effective project management.
                </motion.p>
            </div>
            
            <Filters 
                uniqueTechnologies={uniqueTechnologies}
                setSelectedTechnology={setSelectedTechnology}
                selectedTechnology={selectedTechnology}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
            />

            <div className='mt-20 flex flex-wrap gap-7'>
                <AnimatePresence>
                    {filteredProjects.map(project => {
                        const imageUrl = project.attributes.image.data[0].attributes.url;
                        return (
                            <ProjectCard
                                key={project.attributes.name}
                                name={project.attributes.name}
                                desc={project.attributes.desc}
                                image={imageUrl}
                                gitHubLink={project.attributes.gitHubLink}
                                liveLink={project.attributes.liveLink}
                                project_technologies={project.attributes.project_technologies.data}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>
        </>
    )
}

export default Wrapper(Projects, "");
