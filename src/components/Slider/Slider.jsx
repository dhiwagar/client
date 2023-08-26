import React, { useState } from 'react'

import './Slider.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Swiper, SwiperSlide } from 'swiper/react';
function Slider() {

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];


  return (
    <div className='slider'>
      <Swiper   spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper" >
        {data.map((imgs)=>(
          <SwiperSlide>
            <img src={imgs} alt="" />        
             </SwiperSlide>
        ))}
        
     
      </Swiper>
      </div>

    
  )
}

export default Slider