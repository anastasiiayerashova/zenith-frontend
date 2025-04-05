import s from './AboutSection.module.css'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { textAnimation } from '../../config/textAnimation.js'

const AboutSection = () => {
    
    const ulAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 25,
      },
    },
  };

    const [ref, inView] = useInView({
    triggerOnce: true,   
    threshold: 0.2,      
    });

    const [refUl, inViewUl] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
    
    return (
        <section className={s.about} id='about'>
            <motion.h2 ref={ref} custom={1} variants={textAnimation} initial='hidden' animate={inView ? "visible" : "hidden"}>About Zenith</motion.h2>
            <div className={s.first_wrap}>
                <div className={s.image}></div>
                <p>Zenith is a premium audio brand, dedicated to creating high-quality Bluetooth headphones that combine advanced technology, sophisticated design, and everyday comfort. Founded by a team of audio enthusiasts, we aim to redefine how people experience sound.</p>
            </div>
            <div className={s.second_wrap}>
                <motion.ul  initial="hidden"
          animate={inViewUl ? "visible" : "hidden"}
          variants={ulAnimation}
          transition={{ delay: 0.1 }} ref={refUl} className={s.about_list}>
                    <li className={s.first_li}>
                        <h4>Why Choose Us</h4>
                        <ul>
                            <li>seamless sound</li>
                            <li>modern design</li>
                            <li>intuitive touch controls</li>
                        </ul>
                    </li>
                    <li className={s.second_li}>
                        <h4>Our Mission</h4>
                        <p>craft superior audio experiences with cutting-edge technology and minimalist aesthetics.</p>
                    </li>
                    <li className={s.second_li}>
                        <h4>Our Legacy</h4>
                        <p>Over 5 years of redefining audio, trusted by music lovers worldwide for innovation and quality.</p>
                    </li>
                </motion.ul>
            </div>
        </section>
    )
 }

export default AboutSection