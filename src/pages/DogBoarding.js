import React from 'react'
import dogBoarding from '../img/dogBoarding.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'

export default () => {
  return (
    <div className='container'>
      <Body show='DogBoarding' bgImg={dogBoarding} />
      <Footer />
    </div>
  )
}