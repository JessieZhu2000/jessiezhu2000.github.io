import React from 'react'
import fee from '../img/fee.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'

const Fee = () => {
  return (
  <div className='sitePageBg' style={{ backgroundImage:`url(${fee})` }}>
   <Body show='Fees' />
      <Footer />
    </div>
  )
}

export default Fee