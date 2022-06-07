import React from "react"

import main from '../img/main.jpg'
import Body from "../component/Body";
import Footer from "../component/Footer";

export default () => {
  return (
      <div className = 'container'>
        <Body show = 'Main' bgImg = { main } />
        <Footer />
      </div>
  )
}

