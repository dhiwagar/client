import React from 'react'
import Slider from '../../components/Slider/Slider'
import Featureproduct from '../../components/Featureproduct/Featureproduct'
import Category from '../../components/Category/Category'
import Contact from '../../components/Contact/Contact'

function Home() {
  return (
    <div className='home'>
      <Slider/>
        <Featureproduct type="Feature"/>
        <Category/>
        <Featureproduct type="Trading"/>
        <Contact/>
    </div>
  )
}

export default Home