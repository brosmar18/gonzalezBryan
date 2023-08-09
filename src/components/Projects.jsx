import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Tilt } from "react-tilt";
import { styles } from '../styles';
import { Wrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({
    name,
    desc,
    image,
    gitHubLink,
    liveLink,
    techUsed
}) => {

    const technologies = techUsed.split('-').map(tech => tech.trim()).filter(Boolean);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 gap-1 card-img_hover'>
                        <div
                            onClick={() => window.open(gitHubLink, '_blank')}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-purple-500 transition-colors"
                        >
                            <AiFillGithub />
                        </div>
                        <div
                            onClick={() => window.open(liveLink, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:text-purple-500 transition-colors"
                        >
                            <AiFillEye />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{desc}</p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                {technologies.map((tech, index) => (
                    <p
                        key={`${name}-${tech}-${index}`}
                        className="text-[14px]"
                    >
                        #{tech}
                    </p>
                ))}
                </div>
            </Tilt>
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
            <div className='mt-20 flex flex-wrap gap-7'>
                <AnimatePresence>
                    {projects.map(project => {
                        const imageUrl = project.attributes.image.data[0].attributes.url

                        console.log('Image URL:', imageUrl);
                        return (
                            <ProjectCard
                                key={project.attributes.name}
                                name={project.attributes.name}
                                desc={project.attributes.desc}
                                image={imageUrl}
                                gitHubLink={project.attributes.gitHubLink}
                                liveLink={project.attributes.liveLink}
                                techUsed={project.attributes.techUsed}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>

        </>
    )
}
export default Wrapper(Projects, "");
