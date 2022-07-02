import React from 'react';
import CallToAction from './CallToAction';
import './Header.css';
import { ReactComponent as DevLogo } from '../../assets/header.svg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='about'>
          <div className='about__div'>
            <h5>Hello I'm</h5>
            <h1> Brian Vazquez</h1>
            <h5 className='text-light'>Full Stack Developer</h5>
            <CallToAction className='CallToAction' />
          </div>
          <DevLogo className='header__logo' />
        </div>
        <HeaderSocials />

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
