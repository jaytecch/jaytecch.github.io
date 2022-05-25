
import React from 'react'

export const ProductContent = ({imageSrc, imageTitle, imagePrice}) => {
  return (
    
 <a href="#" className='column-view nav-link col-12 col-sm-6 col-md-4 col-lg-3'>
   <div className='product-card b-radius-18 h-100  d-flex flex-column position-relative'>
    <div className='p-2 border-bottom'>
      <h4>{imageTitle}</h4>
    </div>

    <div className='product-image'>
      <img src={imageSrc} alt='' className='w-100 h-100'/>
    </div>

    <div className='product-price position-absolute bottom-0 start-0 end-0 text-center'>
       <span className='inline-block price p-2'>Price: <span>{imagePrice}</span> eth</span>
    </div>
   </div>

 </a>
  
  )
}
