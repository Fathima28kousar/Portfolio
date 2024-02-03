import styles from './Cursor.module.css'
import {motion} from 'framer-motion'
import {useState,useEffect} from 'react'
const Cursor = () => {
    const [position,setPosition] = useState({x:0,y:0})

    useEffect(() =>{
        const mouseMove =(e) => {
            setPosition({x:e.clientX, y:e.clientY});
        }

        window.addEventListener('mousemove',mouseMove)

        return () =>{
            window.removeEventListener('mousemove',mouseMove)
        }
    },[])
    // console.log(position)
  return (
    <motion.div 
    className={styles.cursor}
    animate = {{x:position.x+10, y: position.y+10}}
    >
      
    </motion.div>
  )
}

export default Cursor
