import React from "react"
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import "../css/BookingDetail.css"

export default () => {
    return (
        <>
            <div className="bookingDetail">
                <h2>Please include these answers in the booking</h2>
                <div className="questionList">
                    <li>your mobile number</li>
                    <li>your dog breed and name</li>
                    <li>solo or group walk</li>
                    <li>pick up address</li>
                    <li>pick up date and time</li>
                </div>
                <div className='contactPhone'>
                    <BsTelephoneFill />
                    <h4>07960482002</h4>
                </div>
                <div className='contactEmail'>
                    <MdOutlineEmail />
                    <h4>
                        <a href="mailto:dogwalkerclubs@gmail.com?subject=Booking Enquiry">dogwalkerclubs@gmail.com</a>
                    </h4>
                </div>
            </div>
        </>
    )
}
