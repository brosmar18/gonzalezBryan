import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div>
        <Link 
          to="/" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' />
          <p>
            Bryan &nbsp;
            <span>
              | Garduno Gonzalez
            </span>
          </p>
        </Link>
        <ul>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div>
          <img 
            src={toggle ? close: menu}
            alt='menu'
            onClick={() => setToggle(!toggle)}
          />
          <div>
            <ul>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title)
                  }}
                >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
