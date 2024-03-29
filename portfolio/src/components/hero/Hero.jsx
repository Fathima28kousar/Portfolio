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
        opacity:0,
        y: 10,
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
                <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                <motion.div variants={textVariants} className={styles.buttons}>
                    <button>See the latest Works</button>
                    <button>Contact Me</button>
                </motion.div>
                <motion.img variants={textVariants} animate='scrollButton'  src='/images/scroll.png' alt='scroll'/>
            </motion.div>
        </div>

        <motion.div className={styles.slidingTextContainer} variants={sliderVariants} initial='initial' animate='animate'>
            Frontend Backend FullStack
        </motion.div>
        <div className={styles.imageContainer}>
            <img src='/images/girl.png' alt='hero' height='600px' />
        </div>
    </div>
  )
}

export default Hero
