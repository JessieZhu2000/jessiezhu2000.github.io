# SEO Action Checklist 


Medium-term improvements:
1. Acquire local citations (Google Business Profile fully optimized, Bing Places, Yelp, Yell, Rover if appropriate).
2. Encourage more Google reviews; embed aggregate rating schema (if displaying review stars) using AggregateRating.
3. Add FAQ schema (FAQPage) for common questions: pricing, insurance, how boarding works, cancellations.
4. Implement breadcrumbs schema once there is deeper site hierarchy.
5. Add a blog / advice hub ("How many walks does my dog need?", "Choosing a Cambridge dog walker", etc.). Target location + service keywords.
6. Set up performance optimization: preconnect to tile server only on Location page, defer non-critical scripts, compress images (WebP/AVIF).
7. Use descriptive file names for images (e.g., cambridge-dog-walking.jpg). Current hashed build assets are fine for performance, but marketing images in /public can be SEO named.

Technical suggestions:
- Move inline structured data generation to a small React component if you later want dynamic updates (e.g., review counts).
- Add <link rel="alternate" hreflang="en-GB" if you ever localize.
- Ensure 301 redirect consistency between www and non-www; pick one (currently using apex).
- Monitor Core Web Vitals (use page speed insights) – optimize CLS (avoid layout shifts in carousels via fixed heights) and LCP (preload hero image <link rel="preload" as="image">).

Content opportunities (target phrases):
- "Cambridge dog walker", "dog walker Cambridge UK", "Cambridge dog boarding", "puppy visits Cambridge", "insured dog walking Cambridge", "home dog boarding Cambridge".

Add these phrases naturally in headings (H2/H3) and body copy; avoid keyword stuffing.

Next immediate code tasks (optional):
- Add <link rel="preload" for hero image on Home.
- Add alt text props to <img> tags in components.
- Convert sitemap.txt to sitemap.xml with lastmod/changefreq.

