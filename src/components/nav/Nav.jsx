import React from 'react';
import { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen,
  AiOutlineComment,
} from 'react-icons/ai';

import { useEffect } from 'react';

import './Nav.css';

const Nav = () => {
  const [activeState, setActiveState] = useState('#');

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY < 700) {
        setActiveState('#');
      }
      if (window.scrollY >= 700 && window.scrollY < 1400) {
        setActiveState('#about');
      }
      if (window.scrollY >= 1400 && window.scrollY < 2100) {
        setActiveState('#experience');
      }
      if (window.scrollY >= 2100 && window.scrollY < 2800) {
        setActiveState('#projects');
      }
      if (window.scrollY >= 2800 && window.scrollY < 3700) {
        setActiveState('#services');
      }
      if (window.scrollY >= 3500) {
        setActiveState('#contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav>
      <a
        href='#'
        className={activeState === '#' ? 'active' : ''}
        onClick={() => setActiveState('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveState('#about')}
        className={activeState === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        className={activeState === '#experience' ? 'active' : ''}
        onClick={() => setActiveState('#experience')}
      >
        <AiOutlineBook />
      </a>
      <a
        href='#projects'
        onClick={() => setActiveState('#projects')}
        className={activeState === '#projects' ? 'active' : ''}
      >
        <AiOutlineBulb />
      </a>
      <a
        href='#services'
        onClick={() => setActiveState('#services')}
        className={activeState === '#services' ? 'active' : ''}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveState('#contact')}
        className={activeState === '#contact' ? 'active' : ''}
      >
        <AiOutlineComment />
      </a>
    </nav>
  );
};

export default Nav;
