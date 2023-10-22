import React from 'react'
import booking from '../img/booking.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'


const Booking = () => {
  return (
     <div className='container'>
      <Body show='Booking' bgImg={booking} />
      <Footer />
    </div>
  )
}

export default Booking