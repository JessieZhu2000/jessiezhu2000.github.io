import React, { useMemo } from 'react';

/* FAQ component with schema.org FAQPage JSON-LD */
const QA = [
  {
    q: 'How many dogs do you walk at once?',
    a: 'Only one household dog at a time. This one-to-one focus keeps walks calm, personalised and safe.'
  },
  {
    q: 'Are you fully insured and DBS checked?',
    a: 'Yes. I hold public liability insurance for dog walking and home dog boarding and I am DBS checked. Proof can be provided on request.'
  },
  {
    q: 'What areas of Cambridge do you cover?',
    a: 'Most Cambridge city neighbourhoods plus nearby villages such as Trumpington, Cherry Hinton, Eddington, Coton, and Grantchester.'
  },
  {
    q: 'What is included in a standard dog walk?',
    a: 'A structured walk (pace appropriate for your dog), enrichment time, water check, paw wipe if muddy, and a WhatsApp photo update.'
  },
  {
    q: 'Do you offer puppy visits?',
    a: 'Yes. Short puppy visits for toilet breaks, gentle play, basic reinforcement and feeding as required. These help build routine and confidence.'
  },
  {
    q: 'How does home dog boarding work?',
    a: 'Your dog lives as part of the household with one guest dog maximum. Three daily updates, tailored walk schedule and adherence to your feeding and medication instructions.'
  },
  {
    q: 'How far in advance should I book?',
    a: 'Regular walks can usually start within a few days. Boarding spots are limited so reserve as early as possible for school holidays and summer.'
  },
  {
    q: 'What are your prices?',
    a: 'Transparent pricing is listed on the Fees page. Boarding from £50 per day; individual walk rates vary by duration & time. No hidden extras.'
  }
];

const FAQ = () => {
  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': QA.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': item.a }
    }))
  }), []);

  return (
    <section className="faqSection" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="faqTitle">Frequently Asked Questions</h2>
      <ul className="faqList">
        {QA.map(item => (
          <li key={item.q} className="faqItem">
            <h3 className="faqQ">{item.q}</h3>
            <p className="faqA">{item.a}</p>
          </li>
        ))}
      </ul>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
};

export default FAQ;
