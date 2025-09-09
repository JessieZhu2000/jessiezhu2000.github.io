import React from 'react'
import job from '../img/job.jpg'
import Body from '../component/Body'
import Footer from '../component/Footer'

const Jobs = () => {
  return (
  <div className='sitePageBg' style={{ backgroundImage:`url(${job})` }}>
   <Body show='Jobs' bgImg={job} />
      <Footer />
    </div>
  )
}

export default Jobs