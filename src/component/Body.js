import React from "react"
import Detail from "./Detail";

export default ({ show, bgImg }) => {
  return (
    <>
      <div className="bgImg" style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: '100%',
        width: '100%'
      }}>
      </div>
      <div><Detail show={show} /></div>
    </>
  )
}
