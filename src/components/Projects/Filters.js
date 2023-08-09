import React from 'react';
import { BsFilterSquare } from 'react-icons/bs';

const Filters = ({ 
    uniqueTechnologies, 
    setSelectedTechnology, 
    selectedTechnology, 
    showFilters, 
    setShowFilters 
}) => {

    return (
        <div>
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

                        // Find the project with the current tech
                        // This logic assumes `projects` is passed in as a prop, adjust accordingly
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
        </div>
    );
}

export default Filters;
