import React from "react"
import { Link, Outlet } from "react-router-dom";
import Logo from './img/logo.png'

import AboutButton from "./component/AboutButton";
import LocationButton from "./component/LocationButton";
import FeesButton from "./component/FeesButton";
import JobButton from "./component/JobButton";
import BookingButton from "./component/BookingButton";

export default () => {

  return (
    <>
      <nav className="header">

        <Link to="/"><img src={Logo} className="img" alt="" /></Link>
        <div className="buttonGroup"><Link to="/About"><AboutButton /></Link>
          <Link to="/Location"><LocationButton /></Link>
          <Link to="/Fees"><FeesButton /></Link>
          <Link to="/Jobs"><JobButton /></Link> 
          <Link to="/Booking"><BookingButton /></Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}