import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import '../css/DogBoarding.css';

const features = [
    "One-to-one bespoke home boarding – only one guest dog at a time for total focus.",
    "Structured day: morning, midday & evening walks plus supervised play & social time.",
    "Plenty of enrichment – games, sniff time and calm rest in a home setting.",
    "Live WhatsApp photo updates so you always feel connected.",
    "Transparent rate £50 per day (holiday rates may vary – book early)."
];

const DogBoardingDetail = () => {
    const [idx, setIdx] = useState(0);
    const total = features.length;
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setIdx(i => (i + 1) % total);
        }, 6000);
        return () => clearInterval(timerRef.current);
    }, [total]);

    const go = (i) => {
        clearInterval(timerRef.current);
        setIdx(i);
    };

    return (
        <section className='dogboarding'>
            <header className='boardingHero'>
                <h1 className='boardingTitle'>Cambridge dog boarding – personal home dog boarding Cambridge</h1>
                <p className='boardingSubtitle'>A calm, insured dog walking Cambridge companion service by day and relaxed home-from-home overnight care—ideal for puppies and seniors.</p>
                <Link className='boardingCta' to="/booking">Book Now</Link>
            </header>
            <ul
                className='boardingList boardingCarousel'
                aria-live='polite'
                aria-atomic='true'
                aria-label='Dog boarding benefits carousel'
            >
                {features.map((item, i) => {
                    const active = i === idx;
                    return (
                        <li
                            key={item}
                            className={'boardingItem boardingItem--carousel ' + (active ? 'is-active' : 'is-inactive')}
                            aria-hidden={!active}
                            aria-label={`Benefit ${i + 1} of ${total}`}
                        >
                            <span className='tick' aria-hidden="true">✓</span>
                            <span>{item}</span>
                        </li>
                    );
                })}
            </ul>
            <div className='boardingDots' role='tablist' aria-label='Select benefit'>
                {features.map((_, i) => (
                    <button
                        key={i}
                        className={'boardingDot' + (i === idx ? ' is-active' : '')}
                        onClick={() => go(i)}
                        aria-label={`Show benefit ${i + 1}`}
                        aria-selected={i === idx}
                        role='tab'
                        type='button'
                    />
                ))}
            </div>
            <p className='boardingNote'>Need a custom schedule or medication administered? Include details in your enquiry—tailored plans welcome.</p>
        </section>
    );
};

export default DogBoardingDetail;