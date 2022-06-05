import { Header } from "./component/Header";
import { Body } from "./component/Body";
import { Footer } from "./component/Footer";
import { useState } from 'react'

import main from './img/main.jpg'
import about from './img/about.jpg'
import location from './img/location.jpg'
import fee from './img/fee.jpg'
import job from './img/job.jpg'
import booking from './img/booking.jpg'

export const App = () => {

  const [bgImg, setBgImg] = useState(main)
  const [show, setShow] = useState("Main")
  
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (e.target.innerText === "ABOUT") {
      setShow("About");
      setBgImg(about)
    } else if (e.target.innerText === "LOCATION") {
      setShow("Location");
      setBgImg(location)
    } else  if (e.target.innerText === "FEES") {
      setShow("Fees");
      setBgImg(fee)
       } else  if (e.target.innerText === "JOB VACANCY") {
      setShow("Job");
      setBgImg(job)
       } else  if (e.target.innerText === "BOOKING") {
      setShow("Booking");
      setBgImg(booking)
    } else  {
      setShow("Main");
      setBgImg(main)
    } 
  }

  return (
    <div className='container'>
      <Header buttonClick={handleButtonClick} bgImg={bgImg}/>
      <Body show={show} bgImg={bgImg} />
      <Footer />
    </div>
  )
}
export default App;