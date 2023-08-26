import React, { useState } from 'react'
import './navbar.css'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
function Navbar() {
    const [open,setopen]=useState(false)
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src='img/en.png' alt="" srcset="" />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                     <span>USD</span>
                     <KeyboardArrowDownIcon/>

                </div>
                <div className="item">
                <Link to="/product/1" className='link'>Women</Link>
                </div>
                <div className="item">
                <Link to="/product/2" className='link'>Men</Link>
                </div>
                <div className="item">
                <Link to="/product/3" className='link'>Children</Link>
                </div>
                </div>
               
            <div className="center">
          
                <Link to="/" className='link'>SHOPBI</Link>
                </div>
          
            <div className="right">
                
            <div className="item">
                <Link to="/" className='link'>Home</Link>
                </div>
            <div className="item">
                <Link to="/" className='link'>About</Link>
                </div>
            <div className="item">
                <Link to="/" className='link'>Contact</Link>
                </div>
            <div className="item">
                <Link to="/" className='link'>Store</Link>
                </div>
            <div className="icons">
                 <SearchIcon/>
                 <PersonOutlineOutlinedIcon/>
                 <FavoriteBorderOutlinedIcon/>
                 <div className="carticons" onClick={()=>setopen(!open)}>
                 <ShoppingCartOutlinedIcon/>
                 <span>0</span>
                 </div>
                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
    
  )
}

export default Navbar