import React from 'react'
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='product-card w-[13.5rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className=' w-full h-full object-cover object-left-top' src={product.imageUrl} alt="" />
        </div>
        <div className="textPart bg-white p-3">
            <div>
                <p>{product.title}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className=' font-semibold'>&#x20B9; {product.discountedPrice}</p>
                <p className=' line-through opacity-50'>&#x20B9; {product.price} </p>
                <p className=' text-green-500 font-semibold'>{product.discountPersent}% Off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard