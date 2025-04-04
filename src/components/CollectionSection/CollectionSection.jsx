import { useState, useRef, useEffect } from 'react'
import s from './CollectionSection.module.css'
import { motion } from 'framer-motion'
import TextGradient from '../../animation/TextGradient.jsx'
import { Link, useLocation } from 'react-router-dom'

const CollectionSection = ({ products }) => {
    
    const [imageType, setImageType] = useState("mob")
    const [visibleCount, setVisibleCount] = useState(3)   
    const [isExpanded, setIsExpanded] = useState(false)
    const location = useLocation()

    const sectionRef = useRef(null);
    const itemHeight = 400;

    useEffect(() => {
        const updImageType = () => {
            if (window.innerWidth >= 1280) {
                setImageType("desk")
                setVisibleCount(4)
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

    const toggleVisibility = () => {
        const newCount = window.innerWidth >= 1280 ? 4 : 3

        if (isExpanded) {
            setVisibleCount(newCount)
            setIsExpanded(false)

            sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        else {
            setVisibleCount(prev => prev + 3)

            window.scrollBy({ top: itemHeight, behavior: 'smooth' });

            if (visibleCount + 3 >= products.length) {
                setIsExpanded(true)
            }
        }
    }

    const featureAnimation = {
          hidden: {
          y: 300,
          opacity: 0,
        },
          visible: custom => ({
          y: 0,
          opacity: 1,
          transition: { delay: custom * 0.1 }, 
          duration: 0.5,
          ease: "easeOut"
        }),
    }

    const hoverAnimation = { scale: 1.1 }

    return (
        <section className={s.collection} ref={sectionRef} id='collection'>
            <div className={s.text_wrap}>
                <TextGradient
                    colors={[
                        'var(--dirty-brown)',
                        'var(--light-grey)',
                        'var(--dirty-brown)',
                        'var(--light-grey)',
                        'var(--dirty-brown)',
                    ]}
                    animationSpeed={4}
                    showBorder={false}
                    className={s.title }
      >
        COLLECTION
      </TextGradient>
                <p className={s.text}>Zenith is more than just sound. It's an experience. Choose the model that best fits your lifestyle</p>
            </div>
            <motion.ul className={s.product_list} initial='hidden' animate='visible'>
                {products.slice(0, visibleCount).map((product, index) => (
                    <motion.li key={index} className={s.product_item} whileHover={hoverAnimation} variants={featureAnimation} custom={index + 0.55}>
                        <Link to={`/product/${product.id.toString()}`} state={location}>
                        <div className={s.img_wrapper}>
                            <img src={product.images[imageType]} alt='headfones'/>
                        </div>
                        
                        {product.originalPrice ? (<div><p className={s.name}>{product.name}</p> <div className={s.price_wrapper}>
                            <p className={s.original_price}>Original Price: <span>{`$${product.originalPrice}`}</span></p>
                            <p>{`Sale Price: $ ${product.salePrice}` }</p>
                            </div></div>) : (<div><p className={s.name}>{product.name}</p> <p className={s.price}>{`Price: $ ${product.price}`}</p></div>)}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
            <button onClick={toggleVisibility} type='button' className={s.btn}>{isExpanded ? 'Hide' : 'Load More' }</button>
        </section>
    )
}

export default CollectionSection