import React from 'react'

function HomeSectionCard({product}) {
  return (
    <div className='curson-pointer justify-center flex flex-col items-center bg-white rounded-lg overflow-hidden max-3'>
      <div className='p-3 shadow-lg'>
        <img className='h-200 w-full max-h-60 object-contain bg-stone-100' src={product.imageUrl} alt='' />
        <p className='  '>{product.title}</p>
        <p> Price: Rs. {product.price} </p>
      </div>
    </div>
  )
}

export default HomeSectionCard
