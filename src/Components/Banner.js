import React from 'react'
import { useState } from 'react';
import lady from '../images/pexels-cottonbro-6069556.jpg'
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";




export const Banner = () => {

//   const [product , setProduct]= useState(["Shoe #1", lady])

 
 
//   const PERSONAL_ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
//   const SHOP_ID = "4165671"
//   const url = "//api.printify.com/v1/shops/" + SHOP_ID +"/products.json"
//   const requestBody = {
//     method: "GET",
//     mode: "no-cors",
//     headers:{
//       'Content-Type': "application/json",
//       'User-Agent': "NodeJS",
//       "Authorization": `bearer ${PERSONAL_ACCESS_TOKEN}`
//     }
//   }

//    async function getProducts(){

//     const response  = await fetch(url, requestBody);

//     console.log(response)


    

//   }

  
 
  



// getProducts()


  return (
    <div className='row banner d-flex m-0 mb-5 justify-content-end align-items-center me-3'>
        <div className='carousel slide  col-12 col-sm-8 col-md-6' data-bs-ride="carousel">
          <div className="carousel-inner w-75 mx-auto">
   <div className='banner-slide-wrapper carousel-item active'>
    <img src={lady} className='w-100 h-100' alt=''/>
   </div>
   <div className='banner-slide-wrapper carousel-item'>
    <img src={lady} className='w-100 h-100' alt=''/>
   </div>
   <div className='banner-slide-wrapper carousel-item'>
    <img src={lady} className='w-100 h-100' alt=''/>
   </div>
</div>
</div>
        <div className='banner-box box ps-5 col-12 col-sm-4 col-md-6 d-flex justify-content-center flex-column '>
         
            <h1 className='w-75'>Explore Marketplace for what catches your eye, and just hit order!</h1>

           <a href='#' className='explore-link'>Explore</a>
           
        </div>
    </div>
    
  )
}
