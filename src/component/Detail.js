import  AboutDetail  from './AboutDetail'
import  LocationDetail  from './LocationDetail'
import  ContactDetail  from './BookingDetail'
import  Intro  from './Intro'
import JobDetail from './JobDetail'
import React from 'react'
import FeesDetail from './FeesDetail'

export default ({show}) => {
  return (
    <div>
      {show === "About" && show !== "Main" && <AboutDetail />}
      {show === "Location" && show !== "Main" && <LocationDetail />}
      {show === "Fees" && show !== "Main" && <FeesDetail />}
      {show === "Jobs" && show !== "Main" && <JobDetail />}
      {show === "Booking" && show !== "Main" && <ContactDetail />}
      {show === "Main" && <Intro />}
    </div>
  )
}
