import ContactForm from '../ContactForm/ContactForm.jsx'
import s from './ContactSection.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { textAnimation } from '../../config/textAnimation.js'

const ContactSection = () => {

    const [ref, inView] = useInView({
    triggerOnce: true,   
    threshold: 0.2,      
    });

    return (
        <section className={s.contact} id='contacts'>
            <motion.h2 ref={ref} custom={1} variants={textAnimation} initial='hidden' animate={inView ? "visible" : "hidden"} className={s.contact_title}>Contact us</motion.h2>
            <motion.p ref={ref} custom={2} variants={textAnimation} initial='hidden' animate={inView ? "visible" : "hidden"} className={s.text}>We are always in touch. Email us or leave your contacts and we will respond as soon as possible</motion.p>
            <ContactForm/>
        </section>
    )
 }

export default ContactSection