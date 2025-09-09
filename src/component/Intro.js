import React from 'react'
import { Link } from 'react-router-dom';

import '../css/Intro.css'

const Intro = () => {
  return (
    <div className='intro'>
      <h1>Professional Dog walker / Pet sitter / Pet boarding in Cambridge</h1>
      <p> &#10003; Happy dog equals happy owner</p>
      <p> &#10003; Instant book and confirmation</p>
       <p> &#10003; Fully insured and DBS checked</p>
      <p> &#10003; Pick up and drop off</p>
      <p> &#10003; WhatApp live update</p>
      <p> &#10003; Reliable &#38; Friendly</p>
  <p><Link to="/booking">Book Now</Link></p>
    </div>
  )
}

export default Intro;