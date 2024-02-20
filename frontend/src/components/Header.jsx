import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Container} from 'reactstrap'
import './header.css'


const nav_links = [
    {
        display:'Home',
        url:'/home'
    },
    {
        display:'Market',
        url:'/market'
    },
    {
        display:'Create',
        url:'/create'
    },
    {
        display:'Contact',
        url:'/contact'
    },
    {
        display:'Wallet',
        url:'/wallet'
    },
    
]


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2 className=" d-flex gap-2 align-items-center ">
          <span>
            <i class="ri-fire-fill"></i>
          </span>
          NFTS
        </h2>
      </div>

    <div className= "navigation">
      
      <div className= "navMenu">
        <ul className= "nav_list">
                 <li className= "nav_item" >
                  
                 <NavLink to='/home' className={navClass => navClass.isActive ? 'active'
                 : ''}>Home</NavLink>
             </li>
             <li className= "nav_item" >
                  
                 <NavLink to='/home' className={navClass => navClass.isActive ? 'active'
                 : ''}>Market</NavLink>
             </li>
             <li className= "nav_item" >
                  
                 <NavLink to='/home' className={navClass => navClass.isActive ? 'active'
                 : ''}>Create</NavLink>
             </li>
             <li className= "nav_item" >
                  
                 <NavLink to='/home' className={navClass => navClass.isActive ? 'active'
                 : ''}>Contact</NavLink>
             </li>
             <li className= "nav_item" >
                  
                 <NavLink to='/home' className={navClass => navClass.isActive ? 'active'
                 : ''}>Wallet</NavLink>
             </li>
        </ul>
      </div> 
      <div className="nav_right d-flex align-items-center gap-5 ">
  <button className="btn">
    <Link to="/wallet" className=" d-flex gap-2 align-items-center">
      <span>
        <i class="ri-wallet-line"></i>
      </span>
      Connect Wallet
    </Link> I
  </button>
  
</div>
    </div>
  
</header>
  )
}

export default Header