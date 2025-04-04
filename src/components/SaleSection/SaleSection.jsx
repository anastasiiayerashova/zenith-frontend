import s from './SaleSection.module.css'
import { useState, useEffect } from 'react'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const SaleSection = ({ products }) => {
    
    const filteredProducts = products.filter(product => product.originalPrice)
    const [imageType, setImageType] = useState("mob")
    const [currentIndex, setCurrentIndex] = useState(0)

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
    
    return (
        <section className={s.sale}>
            <h2 className={s.title}>Sale</h2>
            <div className={s.slider_wrapper}>
                <button className={`${s.button} ${currentIndex === 0 ? s.disabled : ""}`} onClick={handlePrev} disabled={currentIndex === 0}>
                    <SlArrowLeft size={14}/>
                </button>
                <div className={s.slider}>
                <ul className={s.product_list} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {filteredProducts.map((product, index) => (
                    <li key={currentIndex} className={s.product_item}>
                        <div className={s.img_wrapper}>
                            <img src={product.images[imageType]} alt='headfones'/>
                        </div>
                        
                        <div className={s.price_container}>
                            <p className={s.name}>{product.name}</p>
                            <div className={s.price_wrapper}>
                            <p className={s.original_price}>Original Price: <span>{`$${product.originalPrice}`}</span></p>
                            <p>{`Sale Price: $ ${product.salePrice}` }</p>
                            </div>
                        </div>
                    </li>
                ))}
                    </ul>
                    </div>
                <button className={`${s.button} ${currentIndex === filteredProducts.length - 1 ? s.disabled : ""}`} onClick={handleNext} disabled={currentIndex === filteredProducts.length - 1}>
                    <SlArrowRight size={14}/>
                </button>
            </div>
        </section>
    )
 }

export default SaleSection