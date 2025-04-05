import s from './ProductPage.module.css'
import { useLocation, useParams, Link, Outlet } from 'react-router-dom'
import BackLink from '../../components/BackLink/BackLink.jsx'
import { useState, useEffect, Suspense, useMemo } from 'react'
import Loader from '../../components/Loader/Loader.jsx'
import { AnimatedLayout } from '../../components/AnimatedLayout.jsx'
import { motion } from 'framer-motion'
import { textAnimation } from '../../config/textAnimation.js'
import SplashCursor from '../../blocks/Animations/SplashCursor/SplashCursor.jsx'

const ProductPage = ({ products }) => {
    
    const { productId } = useParams()
    const [imageType, setImageType] = useState("mob")

    const product = useMemo(() => {
        window.scrollTo(0, 0);
        return products?.find(p => p.id.toString() === productId) || null
    }, [productId, products])


    if (products === null) {
        return <Loader />
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
        <AnimatedLayout>
        <SplashCursor/>
        <section className={s.product}>
            <BackLink to={'/#collection'} />
            <div className={s.title_wrap}>
                <motion.h2 custom={1} variants={textAnimation} initial='hidden' animate='visible' className={s.title}>
                        {product.name}
                    </motion.h2>
                <motion.p custom={2} variants={textAnimation} initial='hidden' animate='visible' className={s.text}>{product.descr }</motion.p>
            </div>
            <div className={s.main_wrap}>
            <div className={s.first_wrap}>
                <div className={s.headfones}>
                    <img src={product.images[imageType]} alt='headfones'/>
                </div>
                <div className={s.description}>
                    <div className={s.price_wrap}>
                        {product.originalPrice ? (<p className={s.original_wrap}>Price: <span className={s.original_price}>{`$${product.originalPrice}` }</span>{`$${product.salePrice}` }<span></span></p>) : (<p className={s.normal_price}>Price: <span className={s.normal_price}>{`$${product.price}` }</span></p>)}
                    </div>
                    <p className={s.descr}>{product.description}</p>
                    <p className={s.small_text}>Key Features:</p>
                    <ul className={s.features_list}>
                        {product.features.map((feature, index) => (
                            <li key={index} className={s.feature_item}>
                                <p>{`${feature.name}:`}</p>
                                <p>{feature.description }</p>
                            </li>
                        ))}
                    </ul>
                    
            </div>            
            </div>
                <div className={s.second_wrap}>
                    <ul className={s.highlights_list}>
                        {product.highlights.map((h, index) => (
                            <li key={index} className={s.h_item}>
                                <p className={s.h_text}>{h }</p>
                            </li>
                        ))}
                    </ul>
                    <div className={s.reviews_wrap}>
                        <Link to='reviews' className={s.btn}>Reviews</Link>
                        <Suspense fallback={<Loader/>}> 
                          <Outlet />
                        </Suspense>
                    </div>
                    </div>
                    
            </div>
        </section>
        </AnimatedLayout>
    )
}

export default ProductPage