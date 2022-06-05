import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

export const ContactDetail = () => {
    return (
        <>
            <div className="contactDetail">
                <h2>Please include these answers on the phone or in the email to speed up booking.</h2>
                <div className="questionList">
                    <li>mobile</li>
                    <li>dog breed</li>
                    <li>which service do you need?</li>
                    <li>pick up address</li>
                    <li>pick up date and time</li>
                </div>
                <div className='contactPhone'>
                    <BsTelephoneFill />
                    <h3>07960482002</h3></div>
                <div className='contactEmail'>
                    <MdOutlineEmail />
                    <i class="fa fa-envelope"></i>
                    <h3>
                        <a className="mail" href="mailto:dogwalkerclubs@gmail.com?subject=Booking Enquiry">dogwalkerclubs@gmail.com</a>
                    </h3>
                </div>
            </div>
        </>
    )
}
