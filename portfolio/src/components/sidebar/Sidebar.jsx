import { useState } from 'react'
import styles from './Sidebar.module.css'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import {motion} from 'framer-motion'

const variants = {
  open:{
      clipPath: 'circle(1200px at 50px 50px)',
      transition:{
          type:'spring',
          stiffness: 20
      }
  },
  closed:{
      clipPath: 'circle(30px at 50px 50px)', //30px is radius and 50px is x and y axis
      transition:{
        delay: 0.5,
        type:'spring',
        stiffness: 400,   //we cannot use duration so use stiffness
        damping: 40
      }
  }
}

const Sidebar = () => {
  const [open,setOpen] = useState(false)
  
  return (
    <motion.div className={styles.sidebar} animate={open?"open":"closed"}>
      <motion.div className={styles.bg} variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
