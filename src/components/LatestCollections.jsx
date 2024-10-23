import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'


const LatestCollections = () => {
    const {products} = useContext(shopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])
  return (
    <div className='my-10'>
        <div className="text-center py-8 text-3xl">
            <Title text1={'Latest'} text2={'COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Stay ahead of the trends with our seasonal collections. Each season brings new styles, colors, and designs. Embrace the freshness of spring florals, the warmth of autumn hues, and the timeless elegance of winter wear.

</p>
        </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default LatestCollections
