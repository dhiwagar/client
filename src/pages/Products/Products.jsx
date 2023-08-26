import React, { useState } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import './products.css'
function Products() {

  const catId=  parseInt( useParams().id)
  console.log(catId);
  const [max,setmaxprice]=useState(1000)
  const [sort,setsort]=useState(null)
  return (
    <div className='Products'>
      <div className="left-pro-con">
        <div className="filteritem">
          <h1>Product Categories</h1>
          <div className="input_item">
             <input type="checkbox" value={1} id='1'/>
             <label htmlFor="1">Shoes</label>
          </div>
          <div className="input_item">
             <input type="checkbox" value={1} id='2'/>
             <label htmlFor="2">Skirts</label>
          </div>
          <div className="input_item">
             <input type="checkbox" value={1} id='3'/>
             <label htmlFor="3">Coats</label>
          </div>

        </div>
        <div className="filteritem">
          <h1>Filter by price</h1>
          <div className="input_item">
             <span>
              0
              </span>
              <input type="range" min={0} max={1000}  onChange={(e)=>setmaxprice(e.target.value)}/>
              <span>
            {max}
              </span>
          </div>

        </div>
        <div className="filteritem">
     <h1>Sort by</h1>
     <div className="input_item">
         <input type="radio" id='asc'  value="asc" name='price' onChange={e=>setsort("asc")}/>
         <label htmlFor="asc">Price (Lowest first)</label>
          
          </div>
     <div className="input_item">
     <input type="radio" id='desc'  value="desc" name='price'onChange={e=>setsort("desc")}/>
         <label htmlFor="desc">Price (Highest first)</label>
          
          </div>
        </div>
        
      </div>
      <div className="right-pro-con">
      <img
          className="catImg1"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
         <List maxprice={max} sort={sort} catId={catId}/>
      </div>
     
    </div>
      

  )
}

export default Products