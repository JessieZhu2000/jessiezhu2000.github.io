import React from 'react'
import booking from '../img/booking.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'


const Booking = () => {
  return (
  <div className='sitePageBg' style={{ backgroundImage:`url(${booking})` }}>
   {/* Removed bgImg prop to drop inner hero background image */}
   <Body show='Booking' />
      <Footer />
    </div>
  )
}

export default Booking