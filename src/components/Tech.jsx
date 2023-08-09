import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { Wrapper } from "../hoc";



const Tech = () => {
  const [technologies, setTechnologies] = useState([]);

  async function getTechnologies() {
    try {
      const response = await fetch("http://localhost:1337/technologies", { method: "GET" });
      const data = await response.json();
      setTechnologies(data);
    } catch (e) {
      console.log("Error fetching technologies:", e);
    }
  }

  useEffect(() => {
    getTechnologies();
  }, []); //// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Wrapper(Tech, "");