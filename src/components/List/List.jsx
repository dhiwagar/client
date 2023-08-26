import React from 'react'
import './list.css'
import Card from '../Card/Card'

function List() {
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
          id:4,
          img:"https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title:"Long Sleeve Grapic T-shirts",
          isNew:false,
          oldprice:19,
          price:12
        }
      ]
  return (
    <div className='list-items'>
           {data.map((imges)=>(
        <Card key={imges.id} item={imges}/>

      ))}
    </div>
  )
}

export default List