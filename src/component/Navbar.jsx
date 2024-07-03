import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className=' border-b-2 sticky top-0 bg-slate-200 mb-5 shadow-lg w-full flex justify-around items-center p-3'>
    <Link to='/'><h1 className=' p-2 text-3xl font-bold'>Your Store</h1></Link>
    <Link to='/'><h2 className=' p-2 text-xl rounded-md hover:shadow-md hover:bg-slate-400 font-bold '>Product</h2></Link>
    </nav>
  )
}
