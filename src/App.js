import React, { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom";
import logo from "./img/logo.png";


const App = () => {
  const [scrolled,setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <>
      <nav className={"header" + (scrolled?" scrolled":"") }>
        <div className={"navBar" + (menuOpen ? " menuOpen" : "") }>
          <Link to="/" className="navBrand">
            <img src={logo} alt="Cambridge Dog Walker" className="logo" />
          </Link>
          <button
            className="mobileToggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <div className={"buttonGroup" + (menuOpen ? " open" : "") }>
            <Link to="/About" className="button">About</Link>
            <Link to="/Location" className="button">Location</Link>
            <Link to="/Fees" className="button">Fees</Link>
            <Link to="/DogBoarding" className="button">Dog Boarding</Link>
            <Link to="/Shopping" className="button">Shop</Link>
            <Link to="/FAQ" className="button">FAQ</Link>
            <Link to="/Booking" className="button gradient">Booking</Link>
            <button className="buttonPhone" onClick={()=>window.location.href='tel:07514434225'}>07514 434 225</button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default App;
