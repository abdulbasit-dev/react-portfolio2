import React from 'react';
import {motion} from 'framer-motion';

import './Hero.css';
import coding from '../undraw_coding_6mjf.svg';

function Hero() {
  return (
    <div className='hero '>
      <div className='row align-items-center hero__container '>
        <div className='col-md-6 '>
          <motion.div
            initial={{x: -600}}
            animate={{x: 0}}
            transition={{duration: 1, ease: 'easeOut'}}
            className='hero__description'
          >
            <h1 className='display-3'>Abdulbasit Salah</h1>
            <p>Full Stack web Developer</p>
            <div className='hero_action mt-4'>
              <button className='btn btn-dark btn-lg'>Contact Me</button>
              <a
                href='https://docs.google.com/document/d/1qHTEaAmyJAO87x80Sb9uCbCx6LJV_8sS/edit'
                rel='noreferrer'
                target='_blank'
              >
                <button className='btn btn-outline-info ml-3 btn-lg'>
                  See My Cv
                </button>
              </a>
            </div>
          </motion.div>
        </div>
        <div className='col-md-6 text-center'>
          <motion.img
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1.4}}
            src={coding}
            className='img-fluid hero__img'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
