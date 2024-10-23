import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'

const BestSeller = () => {
    const {products} = useContext(shopContext)
    const [bestSeller,setBestSeller] = useState([])

    useEffect(()=>{
        const BestProducts = products.filter((item)=>(item.bestseller))
        setBestSeller(BestProducts.slice(0,5));
    },[])
  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            <b>Shop Our
            Best Sellers</b><br></br>
Discover the favorites that everyone is talking about! Our best-selling collection features the most popular styles, loved by our customers for their quality, comfort, and timeless appeal.
            </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {
            bestSeller.map((item,index)=>(
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
          }
        </div>
    </div>
  )
}

export default BestSeller
