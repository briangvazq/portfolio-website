import React from 'react';
import CV from '../../assets/cv-ingles.pdf';

const CallToAction = () => {
  return (
    <div className='callToAction'>
      <a href={CV} download className='btn'>
        Download CV
      </a>
      <a href='' className='btn btn-primary'>
        {' '}
        Let's Talk
      </a>
    </div>
  );
};

export default CallToAction;
