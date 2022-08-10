import React from "react"
import main from '../img/main.jpg'

export default () => {
  return (
    <div class='bodyContainer'>
      <div className="bgImg" style={{
        backgroundImage: `url(${main})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>    
      <div className='intro'>
        <h1>Professional Dog walker / Pet sitter / Pet boarding in Cambridge</h1>    
        <p> &#10003; Happy dog equals happy owner</p>
        <p> &#10003; Instant book and confirmation</p>
        <p> &#10003; Fully insured and DBS checked</p>
        <p> &#10003; Pick up and drop off</p>
        <p> &#10003; WhatApp live update</p>
        <p> &#10003; Reliable &#38; Friendly</p>
        <p><a href="mailto:dogwalkerclubs@gmail.com?subject=Booking Enquiry">Book Now</a></p> 
      </div>
     </div>
    </div>
  )
}

