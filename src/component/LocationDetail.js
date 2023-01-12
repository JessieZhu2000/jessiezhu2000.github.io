import React from "react"

import '../css/LocationDetail.css'

export default () => {
    return (
        <>
            <div className='locationDetail'>
               <h2>We cover the following areas around Cambridge &nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:dogwalkerclubs@gmail.com?subject=Booking Enquiry">Book Now</a></h2> 
                <table>
                    <tbody>
                        <tr>
                            <td>Central Cambridge</td>
                            <td>Trumpington</td>
                            <td>Grantchester</td>
                            <td>Great Shelford</td>
                        </tr>
                        <tr>
                            <td>Little Shelford</td>
                            <td>Stapleford</td>
                            <td>Hauxton</td>
                            <td>Harston</td>
                        </tr>
                    </tbody>
                </table>
                <h5>* Some area will be subject to distance charge.</h5>
                <h5>* Contact me if your area is not listed above.</h5>
            </div>
        </>
    )
}
