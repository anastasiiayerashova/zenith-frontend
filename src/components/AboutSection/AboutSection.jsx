import s from './AboutSection.module.css'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { leftSlide, rightSlide, ulAnimation } from '../../config/textAnimation.js'

const AboutSection = () => {

    const [ref, inView] = useInView({
    triggerOnce: false,   
    threshold: 0.2,      
    });

    const [refText, inViewText] = useInView({
    triggerOnce: false,   
    threshold: 0.2,      
    });

    const [refUl, inViewUl] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    })
    
    return (
        <section className={s.about} id='about'>
            <motion.h2
                ref={ref}
                custom={1}
                variants={leftSlide}
                initial='hidden'
                animate={inView ? "visible" : "hidden"}>About Zenith</motion.h2>
            <div className={s.first_wrap}>
                <div className={s.image}></div>
                <motion.p ref={refText}
                    variants={rightSlide}
                    initial="hidden"
                    animate={inViewText ? "visible" : "hidden"}>Zenith is a premium audio brand, dedicated to creating high-quality Bluetooth headphones that combine advanced technology, sophisticated design, and everyday comfort. Founded by a team of audio enthusiasts, we aim to redefine how people experience sound.</motion.p>
                </div>
            <div className={s.second_wrap}>
                <motion.ul
                    initial="hidden"
                    animate={inViewUl ? "visible" : "hidden"}
                    variants={ulAnimation}
                    transition={{ delay: 0.50 }}
                    ref={refUl}
                    className={s.about_list}>
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