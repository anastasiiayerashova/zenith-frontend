import s from './ProductPage.module.css'
import { useParams, Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import BackLink from '../../components/BackLink/BackLink.jsx'
import { useState, useEffect, Suspense, useMemo } from 'react'
import Loader from '../../components/Loader/Loader.jsx'
import { AnimatedLayout } from '../../components/AnimatedLayout.jsx'
import { motion } from 'framer-motion'
import { leftSlide, rightSlide, ulAnimation } from '../../config/textAnimation.js'
import { useInView } from 'react-intersection-observer'
import TiltedCard from '../../blocks/Components/TiltedCard/TiltedCard.jsx'

const ProductPage = ({ products }) => {

    const location = useLocation();
  const navigate = useNavigate();

  const isReviewsVisible = location.pathname.endsWith('/reviews')

  const toggleReviews = () => {
    if (isReviewsVisible) {
      navigate(`/product/${productId}`)
    } else {
      navigate(`/product/${productId}/reviews`);
    }
  }
    
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
    
    const [refTitle, inViewTitle] = useInView({
    triggerOnce: false,   
    threshold: 0.2,      
    });

    const [refText, inViewText] = useInView({
    triggerOnce: false,   
    threshold: 0.2,      
    })

    const [refUl, inViewUl] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    })

    return (
        <AnimatedLayout>
            <section className={s.product}>
                <div className={s.arrow_wrap}>
            <BackLink to={'/#collection'} />
            <div className={s.title_wrap}>
                <motion.h2 ref={refTitle} variants={leftSlide} initial='hidden' animate={inViewTitle ? "visible" : "hidden"} className={s.title}>
                        {product.name}
                    </motion.h2>
                <motion.p ref={refText} variants={rightSlide} initial='hidden' animate={inViewText ? "visible" : "hidden"} className={s.text}>{product.descr }</motion.p>
                    </div>
                    </div>
            <div className={s.main_wrap}>
            <div className={s.first_wrap}>
                <div className={s.headfones}>
                    <TiltedCard
                    imageSrc={product.images[imageType]}
                    altText={product.name}
                    captionText={product.name}
                    rotateAmplitude={24}
                    scaleOnHover={1.4}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    />
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
                    <motion.ul initial="hidden"
                                        animate={inViewUl ? "visible" : "hidden"}
                                        variants={ulAnimation}
                                        transition={{ delay: 0.50 }}
                                        ref={refUl} className={s.highlights_list}>
                        {product.highlights.map((h, index) => (
                            <li key={index} className={s.h_item}>
                                <p className={s.h_text}>{h }</p>
                            </li>
                        ))}
                    </motion.ul>
                    <div className={s.reviews_wrap}>
      <button onClick={toggleReviews} className={s.btn}>
        {isReviewsVisible ? 'Hide reviews' : 'Reviews'}
      </button>

      {isReviewsVisible && (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}
    </div>
                    </div>
                    
            </div>
        </section>
        </AnimatedLayout>
    )
}

export default ProductPage