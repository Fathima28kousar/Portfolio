import styles from './Portfolio.module.css'
import {motion,useScroll,useSpring,useTransform} from 'framer-motion'
import {useRef} from 'react'

const items = [
    {
        id:1,
        title: 'React Ecommerce',
        img: 'images/organic.jpg',
        desc: 'Organic Store is a responsive full-stack e-commerce website built using HTML, CSS, JS, React.js, and Django.It allows users to purchase organic food, with user information stored in a MySQL database on Cloud Clever. The payment integration is handled on the frontend using React.',
        link:'https://organicstore-frontend-project.vercel.app/',

    },
    {
        id:2,
        title: 'Employee Management',
        img: 'images/employee-management.jpg',
        desc: 'Employee Management is a Django-based responsive HR application enabling CRUD operations with a user-friendly Bootstrap frontend. Utilizing MySQL on Clever Cloud, it facilitates management of employee information, including adding, updating, and deleting records, as well as viewing all employees.',
        link: 'https://django-management-employee.vercel.app/',

    },
    {
        id:3,
        title: 'React Dice game',
        img: 'images/dice-game.jpg',
        desc:'Presenting a dynamic Dice Game application built with React.js, HTML, CSS, and JavaScript. Users engage by selecting a number and clicking on the dice image, aiming to match the dice roll. Points are earned for correct guesses and deducted for incorrect ones. This interactive game is hosted on Vercel',
        link:'https://dicegame-reactjs.vercel.app/',
    },
    {
        id:4,
        title: 'Amazon Clone',
        img: 'images/amazon.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo numquam libero quasi voluptatibus tempora temporibus aspernatur dignissimos necessitatibus, consequuntur unde eaque soluta? Voluptatum at, dolores quod molestiae pariatur doloribus.',
        link: 'https://amazon-frontend-html-css.vercel.app/',


    },
    {
        id:5,
        title: 'JS mini projects',
        img: 'images/mini-projects.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo numquam libero quasi voluptatibus tempora temporibus aspernatur dignissimos necessitatibus, consequuntur unde eaque soluta? Voluptatum at, dolores quod molestiae pariatur doloribus.',
        link: 'https://vanilla-js-miniproject.vercel.app/',
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
                        <button><a href={item.link} className={styles.link} target="_blank" rel="noopener noreferrer">See Demo</a></button>
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
