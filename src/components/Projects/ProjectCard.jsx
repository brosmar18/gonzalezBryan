import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from "react-tilt";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';


const ProjectCard = ({
    name,
    desc,
    image,
    gitHubLink,
    liveLink,
    project_technologies
}) => {


    // Extract tech names and their corresponding color styles
    const technologies = project_technologies.map(tech => ({
        name: tech.attributes.name,
        color: tech.attributes.color
    }));



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
                            key={`${name}-${tech.name}-${index}`}
                            className={`text-[14px] ${tech.color}`}
                        >
                            #{tech.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

export default ProjectCard;