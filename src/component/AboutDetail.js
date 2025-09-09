import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import '../css/AboutDetail.css';

const cards = [
    {
        title: 'Personal Attention',
        body: 'I only walk or sit one dog at a time so your dog receives undivided attention, play and calm reassurance—treated like my own.'
    },
    {
        title: 'Reliable & Available',
        body: 'Seven days a week including bank holidays at short notice. Competitive pricing without lowering standards.'
    },
    {
        title: 'Coverage',
        body: 'Serving Cambridge and surrounding villages. See the location page for the live coverage map and highlighted areas.'
    },
    {
        title: 'Live Updates',
        body: 'Walk sessions include WhatsApp updates so you know your dog is active, stimulated and happy.'
    },
    {
        title: 'Boarding & Sitting',
        body: 'For boarding or sitting you’ll receive three daily WhatsApp updates—you can also check in anytime.'
    }
];

const INTERVAL_MS = 4200; // auto-advance time
const AboutDetail = () => {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setIndex(prev => (prev + 1) % cards.length);
        }, INTERVAL_MS);
        return () => clearInterval(timerRef.current);
    }, []);

    const goTo = (i) => {
        setIndex(i);
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setIndex(prev => (prev + 1) % cards.length);
        }, INTERVAL_MS);
    };

    return (
        <section className='about'>
            <header className="about__hero">
                <h1 className="about__title">Welcome – Cambridge dog walker focused on one–to–one care</h1>
                <p className="about__subtitle">Trusted dog walker Cambridge UK offering individual walks, puppy visits and flexible pet sitting – fully insured & DBS checked.</p>
                <Link className="about__cta" to="/booking">Book Now</Link>
            </header>
            <div className="about__carousel about__carousel--row" aria-live="polite">
                <div className="about__track" style={{ transform:`translateX(-${index * 100}%)` }}>
                    {cards.map((c, i) => {
                        const active = i === index;
                        return (
                            <article
                                key={c.title}
                                className={`aboutCard aboutCard--carouselRow ${active ? 'is-active' : ''}`}
                                aria-hidden={!active}
                            >
                                <h3>{c.title}</h3>
                                <p>{c.body}</p>
                            </article>
                        );
                    })}
                </div>
                <div className="about__dots" role="tablist" aria-label="About highlights">
                    {cards.map((c, i) => (
                        <button
                            key={c.title+"dot"}
                            className={`about__dot ${i === index ? 'is-active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Show: ${c.title}`}
                            aria-selected={i === index}
                            role="tab"
                            type="button"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default AboutDetail