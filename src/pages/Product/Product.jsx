import React from 'react'
import { useState } from 'react'
import './product.css'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
function Product() {

  const [selectimages,setimages]=useState(0)
  const [quanity,setquanity]=useState(1)

 const images=[
  "https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/11021985/pexels-photo-11021985.jpeg?auto=compress&cs=tinysrgb&w=600"

 ]
  return (
    <div className='Product_list'>
      <div className="left-list">
       <div className="img-list">
         <img src={images[0]} alt="" onClick={e=>setimages(0)}/>
         <img src={images[1]} alt="" onClick={e=>setimages(1)}/>
       </div>
       <div className="main-images">
       <img src={images[selectimages]} alt="" />

       </div>
      </div>
      <div className="right-list">
        <h1>Tittle</h1>
        <span className='price'>$999</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet tempora consectetur dolorem repudiandae aspernatur vel nesciunt eaque labore deleniti quos pariatur ipsam eos odit amet, quis neque voluptatibus cupiditate quibusdam!
        </p>
        <div className="quanity">
          <button onClick={()=>setquanity((quanity)=> (quanity===1 ? 1:quanity-1))}>-</button>
          {quanity}
          <button  onClick={()=>setquanity((quanity)=> quanity+1)}>+</button>
        </div>
       
          <button className="add-card-btn">
          <AddShoppingCartIcon/> ADD TO CASH
          </button>
        
        <div className="links">
              <div className="item-add">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item-add">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
        
      </div>

    </div>
  )
}

export default Product