import styles from './Services.module.css';
import { motion } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = ({index}) => {

  return (
    <motion.div className={styles.services}  
    key={index} variants={variants} 
    initial='initial' 
    whileInView='animate'>
      <motion.div className={styles.textContainer} variants={variants}>
        <p>
          I focus on helping your brand grow <br />and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className={styles.titleContainer} variants={variants}>
        <div className={styles.title}>
          <img src='/images/people.jpg' alt='people' />
          <h1>
            <motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className={styles.title}>
          <h1>
            <motion.b whileHover={{color:'orange'}}>For your</motion.b> Business
          </h1>
          <button>WHAT WE DO</button>
        </div>
      </motion.div>
      <motion.div className={styles.listContainer} variants={variants}>
        <motion.div className={styles.box} variants={variants} whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eveniet minus voluptatem! At totam
            consequatur provident mollitia reiciendis odit porro vero maxime quaerat, suscipit earum placeat consectetur iste,
            quos harum.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className={styles.box} variants={variants} whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eveniet minus voluptatem! At totam
            consequatur provident mollitia reiciendis odit porro vero maxime quaerat, suscipit earum placeat consectetur iste,
            quos harum.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className={styles.box} variants={variants} whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eveniet minus voluptatem! At totam
            consequatur provident mollitia reiciendis odit porro vero maxime quaerat, suscipit earum placeat consectetur iste,
            quos harum.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className={styles.box} variants={variants} whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eveniet minus voluptatem! At totam
            consequatur provident mollitia reiciendis odit porro vero maxime quaerat, suscipit earum placeat consectetur iste,
            quos harum.
          </p>
          <button>Go</button>
        </motion.div>
        {/* Repeat the same pattern for other divs */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
