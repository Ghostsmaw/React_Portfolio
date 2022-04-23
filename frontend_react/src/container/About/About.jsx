import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { images} from '../../constants'
import { urlFor, client } from '../../client';

const abouts = [
  {
    title: 'Frontend Developer',
    description: 'I am a frontend developer with passion for building functional and beautiful web applications.',
    imgUrl: images.about01
  },
  {
    title: 'Backend Developer',
    description: 'A Backend developer that is open to learning new technologies and stacks.',
    imgUrl: images.about02
  },
  {
    title: 'Mobile Developer',
    description: 'A mobile developer who has a track record of success creating apps.',
    imgUrl: images.about03
  },
  {
    title: 'DevOps',
    description: 'A self taught DevOps engineer who is open to learning new stacks.',
    imgUrl: images.about04
  }
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);