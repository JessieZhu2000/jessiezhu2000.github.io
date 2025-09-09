import React from "react"

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="siteFooter" role="contentinfo">
      <div className="siteFooter__inner">
        <div className="siteFooter__brand">
          <h4 className="siteFooter__title">Cambridge Dog Walker</h4>
          <p className="siteFooter__tag">Trusted local dog walking & pet care.</p>
        </div>
        <nav className="siteFooter__nav" aria-label="Footer navigation">
          <a href="/About">About</a>
          <a href="/Location">Location</a>
          <a href="/Fees">Fees</a>
          <a href="/DogBoarding">Boarding</a>
          <a href="/Booking">Booking</a>
        </nav>
        <div className="siteFooter__contact">
          <p><strong>Call:</strong> <a href="tel:07514434225">07514 434 225</a></p>
          <p><strong>Email:</strong> <a href="mailto:cambridgedogwalker@gmail.com">camdogwalker@gmail.com</a></p>
        </div>
      </div>
      <div className="siteFooter__legal">© {year} Cambridge Dog Walker. All rights reserved.</div>
    </footer>
  );
};

export default Footer
