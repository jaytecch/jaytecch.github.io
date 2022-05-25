
import React from 'react'
import {GiKey, GiWallet} from 'react-icons/gi'
import {MdExploreOff, MdGeneratingTokens} from 'react-icons/md'
import {BsCoin} from 'react-icons/bs'
import logo from "../images/lucky-elephants-club-logo.png"


export const Header = () => {
    return (
        <header>
            <nav className="row mx-0">
                <ul className='nav py-2  d-flex justify-content-start col'>
                    <li className="nav-item "><a href="#" className='nav-link'><MdExploreOff className="nav-icons"/>Explore</a></li>
                    <li className="nav-item "><a href="#" className='nav-link'><MdGeneratingTokens className='nav-icons'/>Mint</a></li>
                    <li className="nav-item "><a href="#" className='nav-link'><BsCoin className="nav-icons"/>Staking</a></li>
                  </ul>


    <div className='position-absolute p-1'>
                <div className='logo rounded-circle mx-auto' style={
                {
                    width: 100,
                    height: 100,
                    backgroundColor: "white",
                    boxShadow: "0.3px 0.3px 5px grey",
                    border: "3px solid grey"
                }
            }>
                <img src={logo} alt="" className='w-100 h-100 rounded-circle'/>
            </div>
            </div>

                  <ul className='col nav py-2 justify-content-end'>
                  <li className="nav-item "><a href="#" className='nav-link'><GiKey className="nav-icons"/> 0x8dh..ye5</a></li>
                    <li className="nav-item "><a href="#" className='nav-link'><GiWallet className="nav-icons"/>568.90 eth</a></li>
                      </ul>
            </nav>
        </header>
    )
}
