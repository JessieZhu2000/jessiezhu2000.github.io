import React from 'react'
import location from '../img/location.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'

const Location = () => {
  return (
     <div className='container'>
      <Body show='Location' bgImg={location} />
      <Footer />
    </div>
  )
} 
export default Location
