import React from 'react';
import MediaQuery from '../hooks/MediaQuery';
import {motion} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {

  const isAboveLarge = MediaQuery("(min-width: 1060px)");
  return (
    <section id='home' className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'>
      <div>
        {isAboveLarge ? (
          <div>
            <img alt='profile' src="/profile.png" />
          </div>
        ) : (
          <img alt='profile' src="/profile.png" />
        )}
      </div>
    </section>
  )
}

export default Header
