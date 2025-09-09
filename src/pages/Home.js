import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import main from '../img/main.jpg';
import '../css/Home.css';
import reviews from '../data/reviews';

const Home = () => {
  const [startIndex, setStartIndex] = useState(0); // starting index of current window
  const [cycle, setCycle] = useState(0); // used to force remount for animation
  const windowSize = 3;
  const allReviews = reviews; // full list
  const timerRef = useRef(null);

  const totalPages = Math.ceil(allReviews.length / windowSize);
  const pageIndex = Math.floor(startIndex / windowSize);

  useEffect(()=>{
    if(timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(()=>{
      setStartIndex(i => (i + windowSize) % allReviews.length);
      setCycle(c => c + 1);
    }, 6000);
    return ()=> clearInterval(timerRef.current);
  },[allReviews.length, startIndex]);

  const goToPage = (p)=>{
    if(timerRef.current) clearInterval(timerRef.current);
    setStartIndex((p % totalPages) * windowSize);
    setCycle(c=>c+1);
  };
  const nextPage = ()=> goToPage((pageIndex + 1) % totalPages);
  const prevPage = ()=> goToPage((pageIndex - 1 + totalPages) % totalPages);

  const windowIndices = Array.from({length: Math.min(windowSize, allReviews.length)}, (_,i)=> (startIndex + i) % allReviews.length);
  const visibleReviews = windowIndices.map(i => allReviews[i]);

  return (
    <div>
    <div className="homeHero" style={{ backgroundImage: `url(${main})` }}>
      <div className="homeHero__overlay" aria-hidden="true" />
      <section className="homeHero__intro" aria-labelledby="home-hero-heading">
        <h1 id="home-hero-heading" className="homeHero__title">Professional Dog Walker, Pet Sitter & Boarding in Cambridge</h1>
        <ul className="featureList" aria-label="Service highlights">
          <li>Happy dog equals happy owner</li>
          <li>Excellent customer reviews <span className="stars" aria-label="five stars">★★★★★</span></li>
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
  <h2 id="reviews-heading" className="reviewsCard__title">Customer Testimonials</h2>
  <ul className="reviewsList" aria-live="polite" aria-atomic="true" aria-label="Customer testimonials (3 rotating)">
          {visibleReviews.map((r, idx) => (
            <li
              key={`${r.id}-${cycle}`}
              className="review is-visible"
              aria-label={`Review ${(startIndex + idx)%allReviews.length + 1} of ${allReviews.length}, rating ${r.rating} stars`}
            >
              <span className="stars" aria-hidden="true">{'★'.repeat(r.rating)}</span> {r.text}
              {r.author && <span className="reviewAuthor"> — {r.author}</span>}
            </li>
          ))}
        </ul>
        <div className="reviewsDots" role="tablist" aria-label="Review groups navigation">
          <button
            type="button"
            className="reviewsDot"
            aria-label="Previous reviews"
            onClick={prevPage}
          />
          {Array.from({length: totalPages}).map((_,p)=>(
            <button
              key={p}
              type="button"
              className={"reviewsDot" + (p===pageIndex?" is-active":"")}
              role="tab"
              aria-selected={p===pageIndex}
              aria-label={`Go to review group ${p+1} of ${totalPages}`}
              onClick={()=>goToPage(p)}
            />
          ))}
          <button
            type="button"
            className="reviewsDot"
            aria-label="Next reviews"
            onClick={nextPage}
          />
        </div>
      </aside>
  </div>
  </div>
  );
}

export default Home