import React from 'react'
import Card from '../Card/Card'
import './feature.css'
function Featureproduct({type}) {
  const data=[
    {
      id:1,
      img:"https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Long Sleeve Grapic T-shirts",
      img2:"https://www.pexels.com/photo/man-wearing-blue-lacoste-polo-shirt-and-silver-colored-analog-watch-1232459/",
      isNew:true,
      oldprice:19,
      price:12
    },
    {
      id:2,
      img:"https://images.pexels.com/photos/3399995/pexels-photo-3399995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Goat",
      isNew:true,
      oldprice:19,
      price:12
    },
    {
      id:3,
      img:"https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Long Sleeve Grapic T-shirts",
      isNew:false,
      oldprice:19,
      price:12
    },
    {
      id:2,
      img:"https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Long Sleeve Grapic T-shirts",
      isNew:false,
      oldprice:19,
      price:12
    }
  ]
  return (
    <div className='featureproducts'>
      <div className="top-Feature">
        <h1>{type}Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore vero dolorem est nisi, corrupti placeat esse assumenda delectus animi veritatis itaque repellendus pariatur quae mollitia vitae ducimus maiores quis!</p>
        
      </div>
      <div className="bottom-Feature">
      {data.map((imges)=>(
        <Card key={imges.id} item={imges}/>

      ))}
      </div>
    </div>
  )
}

export default Featureproduct