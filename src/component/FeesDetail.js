import React from "react"

import '../css/FeesDetail.css'

export default () => {
    
    const email = "mailto:dogwalkerclubs@gmail.com?subject=Booking Enquiry"
    
    return (
        <div className='priceDiv'>
            <table className='priceDetail'>
                <thead>
                    <tr><th>Type</th><th>Duration</th><th>Price</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>Solo</td><td>30 mins</td><td>£10</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Solo</td><td>60 mins</td><td>£16</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Solo</td><td>Mon-Fri, 30 mins everyday</td><td>£40</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Solo</td><td>Mon-Fri, 60 mins everyday</td><td>£60</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Group(max 4)</td><td>60 mins</td><td>£12 each dog</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Group(max 4)</td><td>Mon-Fri, 60 mins everyday</td><td>£50 each dog</td><td><button><a href={email}>Book</a></button></td></tr>
                </tbody>
            </table>
        </div>
    )
}
