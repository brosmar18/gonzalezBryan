import React, { useState, useEffect } from 'react';


import { styles } from '../styles';
import { Wrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
ai';
import { BsFilterSquare } from 'react-icons/bs';




const Projects = () => {

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
            <div className="flex justify-end mt-10">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    aria-expanded={showFilters}
                    className="flex items-center py-1 px-3 bg-gray-200 text-black rounded-full transition-transform transform duration-300 ease-out hover:bg-gray-800 hover:text-white"
                >
                    <BsFilterSquare className="mr-2" size={24} />
                    {showFilters ? "Close" : "Filter"}
                </button>
            </div>




            {showFilters && (
                <div className={`filter-options ${showFilters ? 'open' : ''} mt-5`}>
                    {uniqueTechnologies.map((tech) => {
                        const isSelected = selectedTechnology === tech;
                        const buttonBaseClasses = 'm-2 py-1 px-3 rounded-full transition-transform transform duration-300 ease-out';


                        // Find the project with the current tech
                        const projectWithTech = projects.find(proj => proj.attributes.project_technologies.data.some(technology => technology.attributes.name === tech));

                        // If found, get the tech data
                        const techData = projectWithTech ? projectWithTech.attributes.project_technologies.data.find(technology => technology.attributes.name === tech) : null;

                        // If tech data is found, get the color, else set a default color
                        const techColor = techData ? techData.attributes.color : 'bg-gray-200 text-black';

                        return (
                            <button
                                key={tech}
                                onClick={() => setSelectedTechnology(tech)}
                                className={`m-2 py-1 px-3 rounded-full ${isSelected ? (tech === 'All' ? 'bg-gray-800 text-white' : 'text-white ' + techColor) : 'bg-gray-200 text-black'} transition-colors duration-300`}
                            >
                                {tech}
                            </button>
                        );
                    })}
                </div>
            )}

            <div className='mt-20 flex flex-wrap gap-7'>
                <AnimatePresence>
                    {/* Use filteredProjects here instead of projects */}
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
