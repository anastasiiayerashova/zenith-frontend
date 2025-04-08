import Header from '../Header/Header.jsx'
import s from './HeroSection.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { leftSlide, rightSlide } from '../../config/textAnimation.js'

const HeroSection = () => {

    const [ref, inView] = useInView({
    triggerOnce: false,   
    threshold: 0.2,      
    });
  
    const [refTitle, inViewTitle] = useInView({
    triggerOnce: false,   
    threshold: 0.2,      
    });

    const [refText, inViewText] = useInView({
    triggerOnce: false,   
    threshold: 0.2,      
    })

    return (
        <div className={s.hero}>
            <Header />
            <div className={s.container}>
                <motion.h1 ref={refTitle} variants={leftSlide} initial='hidden' animate={inViewTitle ? "visible" : "hidden"} className={s.title}>Sound at the peak of perfection</motion.h1>
          <div className={s.bg}>
            <picture>
              <source
      srcSet="/images/woman-desk@2x.png"
      media="(min-width: 1280px)"
    />
    <source
      srcSet="/images/woman-mob@2x.png"
      media="(min-width: 768px)"
    />
    <source
      srcSet="/images/woman-mob@2x.png"
      media="(max-width: 767px)"
    />
    <img
      src="/images/woman-desk@2x.png"
      alt="woman"
    />
            </picture>
                </div>
                <div className={s.button_wrap}>
                    <motion.p ref={refText} variants={rightSlide} initial='hidden' animate={inViewText ? "visible" : "hidden"} className={s.text}>Open the world of premium sound with Zenith</motion.p>
                    <motion.a href="#collection" className={s.hero_button_link} ref={ref} initial={{ x: 200, opacity: 0 }} 
                       animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }} 
                       transition={{
                          type: 'spring',
                          stiffness: 60,
                          damping: 25,
                        }}>
                          
                          <motion.p className={s.hero_button} initial={{ x: 200, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                            transition={{
                              type: 'spring',
                              stiffness: 60,
                              damping: 25,
                            }}>Collection</motion.p>
                    </motion.a>
                </div> 
            </div>
        </div>
    )
}

export default HeroSection