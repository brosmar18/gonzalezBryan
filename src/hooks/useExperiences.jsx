import { useState, useEffect } from 'react';

const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);

  async function getExperiences() {
    try {
      const response = await fetch(`https://gonzalezbryan-server.onrender.com/api/experiences?populate=image`, { method: "GET" });
      const data = await response.json();

      const sortedExperiences = data.data.sort((a, b) =>
        new Date(b.attributes.startDate) - new Date(a.attributes.startDate)  // descending order
      );

      setExperiences(data.data);
    } catch (error) {
      console.log("Error fetching experiences", error);
    }
  }

  useEffect(() => {
    getExperiences();
  }, []);

  return experiences;
};

export default useExperiences;
