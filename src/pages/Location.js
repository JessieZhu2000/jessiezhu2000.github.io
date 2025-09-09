import React from 'react'
import location from '../img/location.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'
import '../css/LocationPage.css'

const Location = () => {
  return (
    <div className='locationPage' style={{ backgroundImage: `url(${location})` }}>
      <Body show='Location' />
      <Footer />
    </div>
  )
} 
export default Location
