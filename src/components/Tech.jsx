import React from "react";
import { BallCanvas } from "./canvas";
import { Wrapper } from "../hoc";
import useTech from '../hooks/useTech';
import {DeskCanvas} from "./canvas";

const Tech = () => {
  const technologies = useTech();

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => {
        const imageUrl = technology.attributes.image?.data?.attributes?.url;

        return (
          <div className='w-28 h-28' key={technology.attributes.name}>
            <BallCanvas icon={imageUrl} />
            <DeskCanvas />
          </div>
        );
      })}
    </div>

  );
};

export default Wrapper(Tech, "");
