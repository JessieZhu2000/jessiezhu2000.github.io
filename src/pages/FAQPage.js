import React from 'react';
import FAQ from '../component/FAQ';

const FAQPage = () => {
  return (
    <main className="sitePageBg faqPage" aria-labelledby="faq-page-heading">
      <header className="faqPageHero">
        <h1 id="faq-page-heading" className="u-pageTitle">Dog Walking & Boarding FAQ – Cambridge</h1>
        <p className="u-pageSubtitle">Quick answers about walks, home dog boarding, insurance, areas covered and booking.</p>
      </header>
      <FAQ />
    </main>
  );
};

export default FAQPage;
