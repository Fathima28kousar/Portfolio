// import Sidebar from '../sidebar/Sidebar'
import styles from './Navbar.module.css'
import {motion} from 'framer-motion'
// import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        {/* <Sidebar/> */}
      <div className={styles.wrapper}>
        <motion.h1
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.5}}
        > 
         <a href="#Homepage"><b>Web</b> Developer</a>
        </motion.h1>

        <motion.div
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.5}}
          className={styles.links}
        > 
          <a href="#Homepage">Home</a>
          <a href="#Services">About</a>
          <a href="#Portfolio">Projects</a>
          <a href="#Contact">Contact</a>
        </motion.div>
        

        {/* <div className={styles.social}>
            <a href='##'> <img src='/images/facebook.png' alt='facebook'/> </a>
            <a href='##'> <img src='/images/instagram.png' alt='instagram'/> </a>
            <a href='##'> <img src='/images/youtube.png' alt='youtube'/> </a>
            <a href='##'> <img src='/images/dribbble.png' alt='dribbble'/> </a>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
