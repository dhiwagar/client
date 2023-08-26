import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './cart.css'
function Cart() {
  const data=[
    {
      id:1,
      img:"https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Long Sleeve Grapic T-shirts",
      desc:"Long Sleeve Grapic T-shirts",
      img2:"https://www.pexels.com/photo/man-wearing-blue-lacoste-polo-shirt-and-silver-colored-analog-watch-1232459/",
      isNew:true,
      oldprice:19,
      price:12
    },
    {
      id:2,
      img:"https://images.pexels.com/photos/3399995/pexels-photo-3399995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Goat",
      desc:"Goat",
      isNew:true,
      oldprice:19,
      price:12
    }
  ]
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
        {data.map((imges)=>(
            <div className="item_price" >
            <img src={imges.img} alt=""  key={imges.id}/>
            <div className="details">
              <h1>{imges.title}</h1>
              <p>{imges.desc?.substring(0,100)}</p>
              <div className="price">
                1x${imges.price}
             
              </div>
            </div>
            <DeleteOutlinedIcon className='delete'
             
            />
          </div>  
           
        ))}
      
      
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$1900</span>
      </div>
      <button className='btn-proce'>PROCEED TO CHECKOUT</button>
      <span className="reset" >
        Reset Cart
      </span>
    </div>
  )
}

export default Cart