import React from 'react';
import styles from './Skills.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const cardData = [
  { id: 1, name: 'HTML', image: 'images/html.png' },
  { id: 2, name: 'CSS', image: 'images/css.png' },
  { id: 3, name: 'Javascript', image: 'images/js.png' },
  { id: 4, name: 'Bootstrap', image: 'images/bootstrap.png' },
  { id: 5, name: 'React', image: 'images/react.png' },
  { id: 6, name: 'Python', image: 'images/python.png' },
  { id: 7, name: 'Django', image: 'images/django.png' },
  { id: 8, name: 'MySQL', image: 'images/mysql.png' },
  { id: 9, name: 'MongoDB', image: 'images/mongodb.png' },
  { id: 10, name: 'Git', image: 'images/git.png' },
  { id: 11, name:'Github', image: 'images/github.jpg' },
  { id: 12, name:'Vercel', image: 'images/vercel.png' },
  
];

const Card = ({ name, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={styles.flipCard}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className={styles.flipCardInner}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.flipCardFront}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.flipCardBack}>
        <h1>{name}</h1>
        </div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={styles.Container}>
      <h2>My Skills</h2>
    <div className={styles.Skills}>
      {cardData.map((card) => (
        <Card key={card.id} name={card.name} image={card.image} />
      ))}
    </div>
    </div>
  );
};

export default Skills;
