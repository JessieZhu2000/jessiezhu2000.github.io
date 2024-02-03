import React from "react"
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import "../css/BookingDetail.css"
const BookingDetail = () => {
    return (
        <>
            <div className="bookingDetail">
                <h2>Please include these answers in the booking</h2>
                <div className="questionList">
                    <ol>&#10003; Your mobile number</ol>
                    <ol>&#10003; Your pet breed and name</ol>
                    <ol>&#10003; Service you need: walking or boarding</ol>
                    <ol>&#10003; Pick up address</ol>
                    <ol>&#10003; Pick up date and time</ol>
                </div>
                <div className='contactPhone'>
                    <BsTelephoneFill />
                    <h4>07960 482 002</h4>
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
export default BookingDetail