import React from 'react'
import { AboutDetail } from './AboutDetail'
import { LocationDetail } from './LocationDetail'
import { PriceDetail } from './PriceDetail'
import { ContactDetail } from './ContactDetail'
import { Intro } from './Intro'
import { JobDetail } from './JobDetail'

export const Detail = ({show}) => {
  return (
    <div>
      {show === "About" && show !== "Main" && <AboutDetail />}
      {show === "Location" && show !== "Main" && <LocationDetail />}
      {show === "Fees" && show !== "Main" && <PriceDetail />}
      {show === "Job" && show !== "Main" && <JobDetail />}
      {show === "Booking" && show !== "Main" && <ContactDetail />}
      {show === "Main" && <Intro />}
    </div>
  )
}
