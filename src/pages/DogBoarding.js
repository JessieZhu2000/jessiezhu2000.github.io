import React from 'react'
import dogBoarding from '../img/dogBoarding.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'

const DogBoarding = () => {
  return (
    <div className='sitePageBg' style={{ backgroundImage:`url(${dogBoarding})` }}>
      <Body show='DogBoarding' />
      <Footer />
    </div>
  )
}

export default DogBoarding