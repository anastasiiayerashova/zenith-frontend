import s from './App.module.css'
import { lazy, Suspense, useState, useEffect } from 'react';
import { db } from '../config/firebase.js';
import { ref, get } from 'firebase/database'

import HomePage from './../pages/HomePage/HomePage';

function App() {

  const [products, setProducts] = useState([])
  
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

  return (
    <HomePage products={products} />
  )
}

export default App
