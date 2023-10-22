import React from 'react'
import fee from '../img/fee.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'

const Fee = () => {
  return (
     <div className='container'>
      <Body show='Fees' bgImg={fee} />
      <Footer />
    </div>
  )
}

export default Fee