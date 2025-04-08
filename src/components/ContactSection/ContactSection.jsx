import ContactForm from '../ContactForm/ContactForm.jsx'
import s from './ContactSection.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Modal from '../Modal/Modal.jsx'
import Popover from '../Popover/Popover.jsx'
import { leftSlide, rightSlide } from '../../config/textAnimation.js'

const ContactSection = ({onEmailSent, isOpen, onClose}) => {

    const [ref, inView] = useInView({
    triggerOnce: true,   
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
        <section className={s.contact} id='contacts'>
            <motion.h2 ref={refTitle} variants={leftSlide} initial='hidden' animate={inViewTitle ? "visible" : "hidden"} className={s.contact_title}>Contact us</motion.h2>
            <motion.p ref={refText} variants={rightSlide} initial='hidden' animate={inViewText ? "visible" : "hidden"} className={s.text}>We are always in touch. Email us or leave your contacts and we will respond as soon as possible</motion.p>
            <ContactForm onEmailSent={onEmailSent} />
            {isOpen && (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <Popover/>
                </Modal>
            )}
        </section>
    )
 }

export default ContactSection