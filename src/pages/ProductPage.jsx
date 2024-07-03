import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GetData} from '../redux/action'
import { Shimmer } from '../component/Shimmer'
import ProductCrad from '../component/ProductCrad'
import {Link as Navlink} from 'react-router-dom'


export default function ProductPage() {

  const dispatch=useDispatch()
  const Data=useSelector((d)=>(d.data))
  const Loading=useSelector((load)=>(load.isLoading))

 

  
  useEffect(()=>{
      dispatch(GetData)     
  },[])

  return (
    Loading?<Shimmer/>:
    <div className=' py-4 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  '>
      {Data?.map((e)=>(
        <Navlink to={`/product/${e.id}`} key={e.id}>
        <ProductCrad data={e} />      
        </Navlink>

      ))}
    </div>
  )
}
