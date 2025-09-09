import React from "react"
import { Link } from 'react-router-dom';
import '../css/FeesDetail.css'
import { SERVICE_PRICES } from '../pricing';

const FeeDetails = () => {
    const email = "mailto:cambridgedogwalker@gmail.com?subject=Booking Enquiry"
    return (
        <section className='priceSection'>
            <header className='priceHeader'>
                <h2 className='priceTitle'>Simple, transparent pricing</h2>
                <p className='priceSubtitle'>One-to-one care with clear rates. Weekly plan saves you money.</p>
            </header>
            <div className='priceDiv'>
                <table className='priceDetail'>
                    <thead>
                        <tr><th>Type</th><th>Duration</th><th>Price</th><th></th></tr>
                    </thead>
                    <tbody>
                        <tr className='is-popular'><td><span className='badge'>Popular</span> Dog walking</td><td>40 mins</td><td>£{SERVICE_PRICES.WALKING}</td><td><Link className="button" to="/booking">Book</Link></td></tr>
                        <tr><td>Dog walking weekly <span className='saveTag'>Save 20%</span></td><td>40 mins Mon–Fri</td><td>£{SERVICE_PRICES.WEEKLY_WALKING}</td><td><Link className="button" to="/booking">Book</Link></td></tr>
                        <tr><td>ONE to ONE Dog boarding</td><td>Per day</td><td>£{SERVICE_PRICES.BOARDING}</td><td><Link className="button" to="/booking">Book</Link></td></tr>
                        <tr><td>Cat / small pet visiting</td><td>Per day</td><td>£{SERVICE_PRICES.CAT_VISIT}</td><td><Link className="button" to="/booking">Book</Link></td></tr>
                        <tr><td>Bespoke pet sitting / boarding</td><td>Varies</td><td>Custom</td><td><button className="button" onClick={()=>window.location.href=email}>Contact</button></td></tr>
                    </tbody>
                </table>
                <p className='priceNote'>All services include live WhatsApp updates. Boarding & sitting include 3 daily updates. Distance surcharge may apply for some villages.</p>
            </div>
        </section>
    )
}

export default FeeDetails