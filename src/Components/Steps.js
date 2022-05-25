

import React from 'react'
import { StepsContent } from './StepsContent'

export const Steps = () => {
  return (
    <div className='m-0 my-3 py-3'>
    {/* Product Heading */}
    <div className='px-2'>
        <div className='mx-3  py-2'>
    <h2>How To Buy</h2>
        </div>
    
    </div>
    <hr />
    <div className='steps-card-container b-radius-18 row mx-0 gy-5 py-3'>
      <StepsContent />
      <StepsContent />
      <StepsContent />
      <StepsContent />
    </div>
    
          
           </div>
  )
}
