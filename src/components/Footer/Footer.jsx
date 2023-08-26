import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item-con">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
          
        </div>
        <div className="item-con">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Store</span>
          <span>Compare</span>
          <span>Cookies</span>

        </div>
        <div className="item-con">
          <h1>About</h1>
          <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit et consequuntur! Voluptate eligendi explicabo animi corrupti molestias exercitationem, officia rem praesentium quibusdam facere, earum nisi quae nam facilis libero. 
          </span>
        </div>
        <div className="item-con">
          <h1>Contact</h1>
          <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit et consequuntur! Voluptate eligendi explicabo animi corrupti molestias exercitationem, officia rem praesentium quibusdam facere, earum nisi quae nam facilis libero.
          </span>

        </div>

      </div>
      <div className="bottom">
        <div className="left-con">
          <span className='logo'>SHOPBI</span>
          <span className='copyright'>Copywrite 2023 All Right Reserved</span>
        </div>
        <div className="right-con">
           <img src="/img/payment.png" alt="" />
          
        </div>
      </div>
    </div>
  )
}

export default Footer