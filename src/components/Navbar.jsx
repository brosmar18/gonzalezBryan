import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <div>
      Navbar
    </div>
  )
}

export default Navbar;
