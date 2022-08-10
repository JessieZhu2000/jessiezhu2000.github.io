import React from "react"
import Detail from "./Detail";

export default ({ show, bgImg }) => {
  return (
    <>
      <div className="bgImg" style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>
      <div><Detail show={show} /></div>
    </>
  )
}
