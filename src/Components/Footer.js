import React from 'react'
import {BsTelegram, BsFacebook, BsInstagram, BsDiscord} from "react-icons/bs"

export const Footer = () => {
  return (
    <footer className='py-5'> 
    <div className='w-100 h-100'>
    <h5 className='text-center'>Stay Updated On:</h5>
<ul class="nav justify-content-center align-items-center">
  <li><a href="#" className='nav-link'> <BsTelegram  className='nav-icons'/> </a></li>
  <li><a href="#" className='nav-link'><BsFacebook className='nav-icons'/></a></li>
  <li><a href="#" className='nav-link'><BsInstagram className='nav-icons'/></a></li>
  <li><a href="#" className='nav-link'><BsDiscord className='nav-icons'/></a></li>
</ul>

 
      </div>
         <p className='copyright text-center'>&copy; Copyright, THE LUCKY ELEPHANTS CLUB, 2022</p>

        </footer>
  )
}
