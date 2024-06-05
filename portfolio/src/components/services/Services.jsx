import styles from "./Services.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x:-150,
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

const Services = ({ index }) => {
  return (
    <motion.div
      className={styles.services}
      key={index}
      variants={variants}
      initial="initial"
      whileInView='animate'
    >
      <motion.div className={styles.textContainer} variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className={styles.titleContainer} variants={variants}>
        <div className={styles.title}>
          <img src="/images/people.jpg" alt="people" />
          <h1>
            <b>Collaborative </b> Innovator
          </h1>
        </div>
        <div className={styles.title}>
          <h1>
            <b>FullStack</b>{" "}
            Developer
          </h1>
          <button>ABOUT ME</button>
        </div>
      </motion.div>
      <motion.div className={styles.listContainer} variants={variants}>
        <motion.div
          className={styles.box}
          variants={variants}
        >
          <p>
          I'm a web developer who loves building cool stuff for the internet. I know how to make websites look good and work smoothly using HTML, CSS, Bootstrap, and JavaScript. I also enjoy using React.js to create interactive web applications. On the backend, I'm skilled in Python, Django, and MySQL. Plus, I'm familiar with Git for version control and Vercel for deployment.I'm passionate about continuously learning and exploring new technologies in the ever-evolving field of web development.
          </p>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default Services;
