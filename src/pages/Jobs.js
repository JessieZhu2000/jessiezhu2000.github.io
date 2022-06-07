import React from 'react'
import job from '../img/job.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'

export default () => {
  return (
     <div className='container'>
      <Body show='Jobs' bgImg={job} />
      <Footer />
    </div>
  )
}