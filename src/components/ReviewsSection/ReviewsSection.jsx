import s from './ReviewsSection.module.css'
import { useState } from 'react'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { clients } from '../../config/clients.js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { leftSlide } from '../../config/textAnimation.js';

const ReviewsSection = () => {

    const [ref, inView] = useInView({
    triggerOnce: true,   
    threshold: 0.2,      
    });

    const [refTitle, inViewTitle] = useInView({
    triggerOnce: false,   
    threshold: 0.2,      
    });

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        if (currentIndex < clients.length - 1) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    return (
        <section className={s.reviews}>
            <motion.h2 ref={refTitle} variants={leftSlide} initial='hidden' animate={inViewTitle ? "visible" : "hidden"} className={s.title}>Reviews</motion.h2>
            <div className={s.slider_wrapper}>
                <button className={`${s.button} ${currentIndex === 0 ? s.disabled : ""}`} onClick={handlePrev} disabled={currentIndex === 0}>
                    <SlArrowLeft size={14} fill='var(--light-brown)'/>
                </button>
                <div className={s.slider}>
                    <ul className={s.reviews_list} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {clients.map((client, index) => (
                            <li key={client.author} className={s.review_item}>
                                <div className={s.review_content}>
                                <p className={s.text}>{client.text }</p>
                                <p className={s.author}>{client.author}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={s.btn_mob}>
                        <button className={`${s.button_mob} ${currentIndex === 0 ? s.disabled : ""}`} onClick={handlePrev} disabled={currentIndex === 0}>
                          <SlArrowLeft size={14} fill='var(--light-brown)'/>
                        </button>
                        <button className={`${s.button_mob} ${currentIndex === clients.length - 1 ? s.disabled : ""}`} onClick={handleNext} disabled={currentIndex === clients.length - 1}>
                          <SlArrowRight size={14} fill='var(--light-brown)'/>
                        </button>
                    </div>
                </div>
                <button className={`${s.button} ${currentIndex === clients.length - 1 ? s.disabled : ""}`} onClick={handleNext} disabled={currentIndex === clients.length - 1}>
                    <SlArrowRight size={14} fill='var(--light-brown)'/>
                </button>
            </div>
        </section>
    )
}

export default ReviewsSection