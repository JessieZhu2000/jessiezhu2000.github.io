import { Contact } from "./Contact";
import {Price} from "./Price";
import { About } from "./About";
import { Location } from "./Location";
import { Job } from "./Job";
import  Logo  from "../img/logo.png"

export const Header = ({buttonClick}) => {
    return (
        <div className="header">
            <img src={Logo} className="img" alt="" onClick={buttonClick} />
            <About onClick={buttonClick} />
            <Location onClick={buttonClick} />
            <Price onClick={buttonClick} />
            <Job onClick={buttonClick} />
            <Contact onClick={buttonClick} />
        </div>
    )
}

export default Header;