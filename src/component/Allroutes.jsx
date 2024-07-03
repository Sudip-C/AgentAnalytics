import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from '../pages/ProductPage'
import SingleProductPage from '../pages/SingleProductPage'

export default function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ProductPage/>} />
            <Route path='/product/:id' element={<SingleProductPage/>}/>
        </Routes>
    </div>
  )
}

