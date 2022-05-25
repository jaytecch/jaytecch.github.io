import React from 'react'
import { ProductContent } from './ProductContent'
import lady from '../images/pexels-cottonbro-6069556.jpg'


export const SectionRow = () => {
    return (
        <div className='px-1'>

            {/* Product Images */}
            
            <div className='section-row-container row m-0 align-items-center'>
                <div className='m-0 product-container row align-items-center b-radius-18  gx-5 gy-5 pt-3 pb-5 '>
                
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                <ProductContent imageSrc={lady} imageTitle="Louis Vuitton" imagePrice="0.832"/>
                            
   
           
            </div>
            </div>
            </div>
            
        
    )
}

SectionRow.defaultProps = {
    height: "80%"
}