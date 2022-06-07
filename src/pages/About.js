import React from 'react'
import aboutImg from '../img/about.jpg'

import Body from '../component/Body'
import Footer from '../component/Footer'

export default () => {
  return (
     <div className='container'>
      <Body show='About' bgImg={aboutImg} />
      <Footer />
    </div>
  )
}
