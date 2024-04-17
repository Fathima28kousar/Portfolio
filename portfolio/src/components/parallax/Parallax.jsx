// import styles from './Parallax.module.css'
// import {motion,useScroll,useTransform} from 'framer-motion'
// import {useRef} from 'react'

// const Parallax = ({type}) => {
//     const ref = useRef

//     const {scrollYProgress} = useScroll({
//         target:ref,
//         offset:['start start' ,'end start']
//     })

//     const yText = useTransform(scrollYProgress,[0,1],['0%','100%'])
//     const yBg = useTransform(scrollYProgress,[0,1],['0%','10%'])
//     const planetClass = type === 'services' ? styles.planets : styles.sun;
//   return (
//     <div className={styles.parallax}
//     style={{
//         background:
//         type === 'services' 
//         ? 'linear-gradient(180deg, #111132,#0c0c1d)'
//         : 'linear-gradient(180deg, #111132,#505064)',
//     }}
//     >
//       <motion.h1 style={{ y: yText }}>{type === 'services' ? 'What we do?' : 'What we Did?'}</motion.h1>
//       <motion.div   className={styles.mountains}></motion.div>      
//       <motion.div style={{ y: yBg }}   className={planetClass}></motion.div>      
//         <motion.div style={{ x: yBg }}   className={styles.stars}></motion.div>    
//     </div>
//   )
// }

// export default Parallax

import { easeInOut, motion } from 'framer-motion';
import React from 'react';
import styles from './Parallax.module.css'

const Parallax = () => {
  return (
    <motion.div className={styles.biggerDiv}>
      <motion.div
        className={styles.parallaxContainer}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 90, 90 ,0],
          borderRadius: ["10%", "10%", "50%", "10%" ],
        }}
        transition={{ duration: 5, ease: easeInOut, repeat: Infinity, repeatDelay: 1 }}
      >
        
      </motion.div>
    </motion.div>
  );
}

export default Parallax;


