import React from 'react'
import booking from '../img/booking.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'

export default () => {
  return (
     <div className='container'>
      <Body show='Booking' bgImg={booking} />
      <Footer />
    </div>
  )
}
