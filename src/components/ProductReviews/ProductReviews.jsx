import Loader from '../Loader/Loader.jsx'
import s from './ProductReviews.module.css'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import AnimatedList from '../../blocks/Components/AnimatedList/AnimatedList.jsx'

const ProductReviews = ({ products }) => {

    const { productId } = useParams()

    const product = useMemo(() => {
            return products?.find(p => p.id.toString() === productId) || null;
        }, [productId, products]);
    
        
        if (products === null) {
            return <Loader />;
        }

    return (
        <ul className={s.reviews_list}>
            <AnimatedList
                enableArrowNavigation={true}
                displayScrollbar={false}>
        {product.reviews.map((review, index) => (
          <li key={index} className={s.review_item}>
            <p className={s.reviews_text}>{review.text}</p>
            <p className={s.reviews_text}>{review.author}</p>
          </li>
        ))}
      </AnimatedList>
    </ul>
    )
 }

export default ProductReviews