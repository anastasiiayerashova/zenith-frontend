import s from './SaleSection.module.css'
import { useState, useEffect } from 'react'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { textAnimation } from '../../config/textAnimation.js';
import { useLocation, Link } from 'react-router-dom';

const SaleSection = ({ products }) => {
    
    const filteredProducts = products.filter(product => product.originalPrice)
    const [imageType, setImageType] = useState("mob")
    const [currentIndex, setCurrentIndex] = useState(0)
    const location = useLocation()

    const handleNext = () => {
        if (currentIndex < filteredProducts.length - 1) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    useEffect(() => {
        const updImageType = () => {
            if (window.innerWidth >= 1280) {
                setImageType("desk")
            }
            else if (window.innerWidth >= 768) {
                setImageType("tab")
            }
            else {
                setImageType("mob")
            }
        }

        updImageType()

        window.addEventListener('resize', updImageType)

        return () => window.removeEventListener('resize', updImageType)
    }, [])

    const [ref, inView] = useInView({
    triggerOnce: true,   
    threshold: 0.2,      
  });
    
    return (
        <section className={s.sale} id='sale'>
            <motion.h2 ref={ref} custom={1} variants={textAnimation} initial='hidden' animate={inView ? "visible" : "hidden"} className={s.title}>Sale</motion.h2>
            <div className={s.slider_wrapper}>
                <button className={`${s.button} ${currentIndex === 0 ? s.disabled : ""}`} onClick={handlePrev} disabled={currentIndex === 0}>
                    <SlArrowLeft size={16} fill='var(--dirty-beige)'/>
                </button>
                <div className={s.slider}>
                <ul className={s.product_list} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {filteredProducts.map((product, index) => (
                    <Link to={`/product/${product.id.toString()}`} state={location} key={currentIndex} className={s.product_item}>
                    <li key={currentIndex}>
                        <div className={s.img_wrapper} >
                            <img src={product.images[imageType]} alt='headfones' />                       
                        </div>
                        
                        <div className={s.price_container}>
                            <p className={s.name}>{product.name}</p>
                            <div className={s.price_wrapper}>
                               <p className={s.original_price}>Original Price: <span>{`$${product.originalPrice}`}</span></p>
                               <p>{`Sale Price: $ ${product.salePrice}` }</p>
                            </div>
                        </div>
                    </li>
                    </Link>
                               
                ))}
                    </ul>
                    </div>
                <button className={`${s.button} ${currentIndex === filteredProducts.length - 1 ? s.disabled : ""}`} onClick={handleNext} disabled={currentIndex === filteredProducts.length - 1}>
                    <SlArrowRight size={16} fill='var(--dirty-beige)'/>
                </button>
            </div>
        </section>
    )
 }

export default SaleSection