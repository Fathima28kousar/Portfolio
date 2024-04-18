import styles from './Portfolio.module.css'
import {motion,useScroll,useSpring,useTransform} from 'framer-motion'
import {useRef} from 'react'

const items = [
    {
        id:1,
        title: 'React Commerce',
        img: 'https://images.pexels.com/photos/593172/pexels-photo-593172.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo numquam libero quasi voluptatibus tempora temporibus aspernatur dignissimos necessitatibus, consequuntur unde eaque soluta? Voluptatum at, dolores quod molestiae pariatur doloribus.'

    },
    {
        id:2,
        title: 'Next.js Commerce',
        img: 'https://images.pexels.com/photos/13009437/pexels-photo-13009437.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo numquam libero quasi voluptatibus tempora temporibus aspernatur dignissimos necessitatibus, consequuntur unde eaque soluta? Voluptatum at, dolores quod molestiae pariatur doloribus.'

    },
    {
        id:3,
        title: 'Vanill js Commerce',
        img: 'https://images.pexels.com/photos/14536809/pexels-photo-14536809.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo numquam libero quasi voluptatibus tempora temporibus aspernatur dignissimos necessitatibus, consequuntur unde eaque soluta? Voluptatum at, dolores quod molestiae pariatur doloribus.'
    },
    {
        id:4,
        title: 'Music',
        img: 'https://media.istockphoto.com/id/1297013252/photo/music-player-on-mobile-phone-with-earphones.jpg?s=612x612&w=0&k=20&c=Y56aq0uvPe8UTYtnMzjHBNQY2WjGERO5iYta1-WwQU8=',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo numquam libero quasi voluptatibus tempora temporibus aspernatur dignissimos necessitatibus, consequuntur unde eaque soluta? Voluptatum at, dolores quod molestiae pariatur doloribus.'

    },
]

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset: ['start start','end start']
    })

    const y = useTransform(scrollYProgress,[0,1],[-300,300]);

    return(
        <section >
            <div className={styles.container}>
               <div className={styles.wrapper}>
                    <div className={styles.imageContainer} ref={ref}>
                        <img src={item.img} alt=''/>
                    </div>
                    <motion.div className={styles.textContainer} style={{y}}> 
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
              </div>
                
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ['end end','start start']
    })

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
  return (
    <div className={styles.portfolio} ref={ref}>
        <div className={styles.progress}>
            <h1>My Projects</h1>
            <motion.div className={styles.progressBar} style={{scaleX}}></motion.div>
        </div>
        {items.map(item =>(
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio
