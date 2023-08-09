import { useState, useEffect } from 'react';

const useTech = () => {
  const [technologies, setTechnologies] = useState([]);

  async function getTechnologies() {
    try {
      const response = await fetch(`http://localhost:1337/api/technologies?populate=image`, { method: "GET" });
      const data = await response.json();
      setTechnologies(data.data);
    } catch (e) {
      console.log("Error fetching technologies:", e);
    }
  }

  useEffect(() => {
    getTechnologies();
  }, []); // You can safely ignore the eslint warning or use any other technique to avoid it

  return technologies;
};

export default useTech;
