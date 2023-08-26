import React from 'react'
import './card.css'
import {Link} from "react-router-dom"
function Card({item}) {
  
  return (
    <Link to={`/product/${item.id}`}>
     <div className='card'>
      <div className="card-img">
      {item.isNew && <span>New Seasons</span>}
        <img src={item.img} alt=""  className='main-img'/>
       
      </div>
        <h2 className='img-tittle'>{item.title}</h2>
        <div className="prices">
         
          <h3>₹{item.oldprice}</h3>
          <h3>₹{item.price}</h3>
        </div>
      
     </div>
    </Link>
   
  )
}

export default Card