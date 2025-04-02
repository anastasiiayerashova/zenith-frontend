import Loader from '../Loader/Loader.jsx'
import s from './ProductReviews.module.css'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

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
            {product.reviews.map((review, index) => (
                <li key={index} className={s.review_item}>
                    <p>{review.text }</p>
                    <p>{review.author }</p>
                </li>
            ))}
        </ul>
    )
 }

export default ProductReviews