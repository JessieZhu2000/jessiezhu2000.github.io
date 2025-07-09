import React from "react"

import '../css/LocationDetail.css'

const LocationDetail = () => {
    return (
        <>
            <div className='locationDetail'>
               <h2>We cover the following areas around Trumpington CB2 area &nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:dogwalkerclubs@gmail.com?subject=Booking Enquiry">Book Now</a></h2> 
                <table>
                    <tbody>
                        <tr>
                            <td>Trumpington</td>
                            <td>Great Shelford</td>
                            <td>Grantchester</td>
                            <td>Cambridge City center</td>
                        </tr>
                
                    </tbody>
                </table>
                <h5>* Some area will be subject to distance charge.</h5>
                <h5>* Contact me if your area is not listed above.</h5>
            </div>
        </>
    )
}
export default LocationDetail