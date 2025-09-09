import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import main from '../img/main.jpg';
import '../css/Home.css';
import reviews from '../data/reviews';

const Home = () => {
  const visibleReviews = reviews.slice(0,12);
  const [reviewIndex, setReviewIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // auto advance every 6s
    timerRef.current = setInterval(() => {
      setReviewIndex(i => (i + 1) % visibleReviews.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [visibleReviews.length]);

  const goTo = (idx) => {
    clearInterval(timerRef.current);
    setReviewIndex(idx);
  };

  return (
    <div className="homeHero" style={{ backgroundImage: `url(${main})` }}>
      <div className="homeHero__overlay" aria-hidden="true" />
      <section className="homeHero__intro" aria-labelledby="home-hero-heading">
        <h1 id="home-hero-heading" className="homeHero__title">Professional Dog Walker, Pet Sitter & Boarding in Cambridge</h1>
        <ul className="featureList" aria-label="Service highlights">
          <li>Happy dog equals happy owner</li>
          <li>Excellent Google reviews <span className="stars" aria-label="five stars">★★★★★</span></li>
          <li>Instant booking & confirmation</li>
          <li>Fully insured & DBS checked</li>
          <li>Free pick up & drop off</li>
          <li>WhatsApp live updates</li>
          <li>Reliable & Friendly care</li>
        </ul>
        <div className="ctaRow">
          <Link to="/booking" className="button gradient large">Book Now</Link>
        </div>
      </section>
      <aside className="reviewsCard" aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className="reviewsCard__title">Google Reviews</h2>
        <ul 
          className="reviewsList" 
          aria-live="polite" 
          aria-atomic="true" 
          aria-label="Customer reviews carousel"
        >
          {visibleReviews.map((r, idx) => {
            const active = idx === reviewIndex;
            return (
              <li
                key={r.id}
                className={"review" + (active ? " is-active" : " is-inactive")}
                aria-hidden={!active}
                aria-label={`Review ${idx+1} of ${visibleReviews.length}, rating ${r.rating} stars`}
              >
                <span className="stars" aria-hidden="true">{'★'.repeat(r.rating)}</span> {r.text}
                {r.author && <span className="reviewAuthor"> — {r.author}</span>}
              </li>
            )
          })}
        </ul>
        <div className="reviewsDots" role="tablist" aria-label="Select review">
          {visibleReviews.map((_, idx) => (
            <button
              key={idx}
              className={"reviewsDot" + (idx === reviewIndex ? " is-active" : "")}
              aria-label={`Show review ${idx+1}`}
              aria-selected={idx === reviewIndex}
              role="tab"
              onClick={() => goTo(idx)}
              type="button"
            />
          ))}
        </div>
      </aside>
    </div>
  );
}

export default Home