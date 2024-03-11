import Sidebar from '../sidebar/Sidebar'
import styles from './Navbar.module.css'
import {motion} from 'framer-motion'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Sidebar/>
      <div className={styles.wrapper}>
        <motion.span
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
        >Portfolio</motion.span>
        <div className={styles.social}>
            <a href='##'> <img src='/images/facebook.png' alt='facebook'/> </a>
            <a href='##'> <img src='/images/instagram.png' alt='instagram'/> </a>
            <a href='##'> <img src='/images/youtube.png' alt='youtube'/> </a>
            <a href='##'> <img src='/images/dribbble.png' alt='dribbble'/> </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
