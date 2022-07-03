import React from 'react';
import './About.css';
import { ReactComponent as AboutLogo } from '../../assets/about.svg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <AboutLogo className='about__logo' />

        <div className='about__content'>
          <div className='about__card-container'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1.5+ years as Developer</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>+10 Completed Projects</small>
            </article>
          </div>
          <p>
            {' '}
            I'm a Software Developer and Computer Science student with few years
            working on personal projects and freelance jobs. I have experience
            in Web and Mobile Development, and I'm always looking for new
            challenges to learn and grow. I'm a fast learner and always looking
            for new ways to improve my skills. If you have any questions, please
            don't hesitate to contact me.
          </p>

          <div className='callToAction'>
            <a href='#contact' className='btn'>
              {' '}
              Let's Talk{' '}
            </a>
            <a href='#projects' className='btn btn-primary '>
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
