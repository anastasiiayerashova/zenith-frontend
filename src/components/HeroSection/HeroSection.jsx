import Header from '../Header/Header.jsx'
import s from './HeroSection.module.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import { textAnimation } from '../../config/textAnimation.js'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <div className={s.hero}>
            <Header />
            <div className={s.container}>
                <motion.h1 custom={1} variants={textAnimation} initial='hidden' animate='visible' className={s.title}>Sound at the peak of perfection</motion.h1>
                <div className={s.bg}></div>
                <div className={s.button_wrap}>
                    <motion.p custom={2} variants={textAnimation} initial='hidden' animate='visible' className={s.text}>Open the world of premium sound with Zenith</motion.p>
                    <motion.a href="#collection" className={s.hero_button_link} initial={{ x: -200, opacity: 0 }} 
                       animate={{ x: 0, opacity: 1 }} 
                       transition={{
                          type: 'spring',
                          stiffness: 50,
                          damping: 25,
                        }}>
                          <FaArrowRightLong className={s.arrow} />
                          <motion.p className={s.hero_button} animate={{scale: [1, 1.1, 1]}}
                            transition={{
                              duration: 1,
                              repeat: Infinity, 
                              repeatType: 'loop', 
                            }}>Collection</motion.p>
                    </motion.a>
                </div> 
            </div>
        </div>
    )
}

export default HeroSection