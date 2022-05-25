import React from 'react'
import { SectionRow } from './SectionRow'
import {GiPoloShirt} from 'react-icons/gi'

export const Products = () => {
  return (
    <div className='row flex-column m-0 my-3 py-3'>
{/* Product Heading */}
<div className='px-2'>
    <div className='mx-3  py-2'>
<h2><GiPoloShirt className="nav-icons"/> Collections</h2>
<hr/>
    </div>

</div>

       <SectionRow />
      



    </div>
  )
}
