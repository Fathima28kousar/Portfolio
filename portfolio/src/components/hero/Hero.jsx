import styles from './Hero.module.css'
import {motion} from 'framer-motion'

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
            staggerChildren:0.1,
        }
    },
    scrollButton:{
        scale: 1.2,
        transition:{
            duration:2,
            repeat:Infinity
        }
    },
}

const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            duration:20,
            repeatType:'mirror'  //coming and going
        }
    },
}


const Hero = () => {
   
  return (
    <div className={styles.hero}>
        <div className={styles.wrapper}>
            <motion.div 
            className={styles.textContainer} 
            variants={textVariants}
            initial='initial'
            animate='animate'>
                <motion.h2 variants={textVariants}>FATHIMA KOUSAR</motion.h2>
                <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                <motion.div variants={textVariants} className={styles.buttons}>
                    <button>Featured Works</button>
                    <button>Download CV</button>
                </motion.div>
                <motion.div variants={textVariants} animate='scrollButton' className={styles.scrollImage}>
                    <i className='fa fa-github'></i>
                    <i className='fa fa-linkedin'></i>
                    <i className='fa fa-envelope'></i>
                </motion.div>
            </motion.div>
        </div>

        <motion.div className={styles.slidingTextContainer} variants={sliderVariants} initial='initial' animate='animate'>
            Frontend Backend FullStack
        </motion.div>
        <div className={styles.imageContainer}>
            <img src='/images/girl.png' alt='hero'  />
        </div>
    </div>
  )
}

export default Hero
