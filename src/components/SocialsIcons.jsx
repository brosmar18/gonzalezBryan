import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const SocialsIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/bryan-garduno-gonzalez-040952232/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={40} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/brosmar18"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={40} />
        </a>
      </div>
    );
  };
  
  export default SocialsIcons;
  