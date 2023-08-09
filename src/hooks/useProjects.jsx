import { useState, useEffect } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    async function getProjects() {
        try {

            const response = await fetch('http://localhost:1337/api/projects?populate[image]=true&populate[project_technologies]=true', { method: "GET" });

            const data = await response.json();


            setProjects(data.data);
        } catch (e) {
            console.log("Error fetching projects", e);
        }
    }


    useEffect(() => {
        getProjects();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return projects;
};

export default useProjects;