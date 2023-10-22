import React from "react"

import '../css/FeesDetail.css'

const FeeDetails =() => {
    
    const email = "mailto:dogwalkerclubs@gmail.com?subject=Booking Enquiry"
    
    return (
        <div className='priceDiv'>
            <table className='priceDetail'>
                <thead>
                    <tr><th>Type</th><th>Duration</th><th>Price</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>Dog walking</td><td>60 mins</td><td>£20</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Dog walking weekly</td><td>60 mins Mon-Fri</td><td>£90</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>ONE to ONE Dog boarding</td><td>per day</td><td>£50</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Cat/small pet visiting</td><td>per day</td><td>£30</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Bespoke pet sitting/boarding</td><td>varies</td><td>varies</td><td><button><a href={email}>Contact</a></button></td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default FeeDetails