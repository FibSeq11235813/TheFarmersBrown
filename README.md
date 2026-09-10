# The Farmers Brown — reverted visual direction

This version intentionally returns to the prior illustrated/vintage-garden design language and treats **Build / Plant / Grow** as an information-architecture and copy update rather than a visual rebrand.

## Key decisions
- Restored the large illustrated garden hero/poster concept.
- Restored the service marquee, giveaway ticket, Garden-in-a-Day poster, Florida timing section and personal Browns section.
- Build / Plant / Grow are integrated as three lanes on the main page instead of forcing visitors through three generic landing pages.
- Existing Formspree endpoint is preserved.
- SEO basics included: title/description, canonical, Open Graph, LocalBusiness schema, sitemap, robots.
- Branch & Byte remains a quiet hidden link in the footer and intentionally has a different digital-workshop style.

## Deployment
Replace the current static-site root with these files and redeploy.


## September 10 refinement
- Removed strategy/internal-monologue copy from the public homepage.
- Expanded Branch & Byte into a full hidden tech microsite.
- Added a dedicated Branch & Byte inquiry form that posts to the existing Formspree endpoint.
- Kept Branch & Byte visitors inside the digital workshop throughout the inquiry flow.


## Local SEO additions
- `raised-garden-beds-tampa.html` targets raised/elevated garden bed searches in Tampa Bay.
- `tampa-bay-web-design.html` targets Tampa Bay web design / Tampa website design / small-business website searches for Branch & Byte.
- `computer-repair-tampa.html` targets computer repair / PC troubleshooting searches around Tampa.
- All focused pages use unique titles/descriptions, canonical URLs, crawlable body copy, Service + FAQ structured data, internal links, and are included in `sitemap.xml`.
- After deployment, submit `https://thefarmersbrown.com/sitemap.xml` in Google Search Console and request indexing for the new service pages. Rankings are never guaranteed; these changes establish stronger relevance and crawlability.
