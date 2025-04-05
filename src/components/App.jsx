import s from './App.module.css'
import { lazy, Suspense, useState, useEffect } from 'react';
import { db } from '../config/firebase.js';
import { ref, get } from 'firebase/database'
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader.jsx';
import ScrollToHash from '../config/scrollToHash.js';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'))
const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage.jsx'))
const ProductReviews = lazy(() => import('../components/ProductReviews/ProductReviews.jsx'))

function App() {

  const [products, setProducts] = useState(null)
  
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const productsRef = ref(db, '/')
                  const snapshot = await get(productsRef)
  
                  if (snapshot.exists()) {
                     const data = snapshot.val()
                     const productsArray = Array.isArray(data) ? data : Object.values(data)
                     setProducts(productsArray)
                     console.log("Данные из Firebase:", productsArray)
                      
                  } else {
                     console.log("Нет данных")
                  }
              }
              catch (e) {
                  console.error('Ошибка при получении данных', e)
              }
          }
          fetchData()
      }, [])
  
  if (products === null) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <ScrollToHash/>
      <Routes>
        <Route path='/' element={<HomePage products={products}/>} />
        <Route path='/product/:productId' element={<ProductPage products={products} />} >
          <Route path='reviews' element={<ProductReviews products={products} /> } />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
