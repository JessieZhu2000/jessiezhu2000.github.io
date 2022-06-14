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
                    <tr><td>Solo dog walk</td><td>30 mins</td><td>£10</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Solo dog walk</td><td>60 mins</td><td>£15</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Solo dog walk</td><td>Mon-Fri, 30 mins everyday</td><td>£40</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Solo dog walk</td><td>Mon-Fri, 60 mins everyday</td><td>£60</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Group(max 4) dog walk</td><td>60 mins</td><td>£12 each dog</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Group(max 4) dog walk</td><td>Mon-Fri, 60 mins everyday</td><td>£50 each dog</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>Dog/Cat/Small pet sitter</td><td>per day</td><td>£40</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>pet boarding</td><td>per day</td><td>£40</td><td><button><a href={email}>Book</a></button></td></tr>
                    <tr><td>on demand pet sitter/boarding</td><td>varies</td><td>varies</td><td><button><a href={email}>Contact</a></button></td></tr>
                </tbody>
            </table>
        </div>
    )
}
