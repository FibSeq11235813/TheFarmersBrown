# The Farmers Brown — Build. Plant. Grow. redesign

Static site bundle designed for the existing GitHub → Render deployment.

## Brand architecture
- **Build** — raised/elevated garden beds, garden structures, tables, custom storage and garage organization.
- **Plant** — starter plants, seedlings, herbs, edible plants and seasonal garden packages.
- **Grow** — Garden-in-a-Day, planning, coaching, education, seasonal support and future growth-oriented offerings.
- **Branch & Byte** — intentionally hidden/alternate-vibe digital workshop for computer repair, website design and small-business tech help.

## SEO included
- Unique title + meta description on each indexable page
- Canonical URLs
- Open Graph / Twitter metadata
- Semantic H1/H2/H3 hierarchy
- Tampa Bay local-intent copy without keyword stuffing
- LocalBusiness + Service JSON-LD structured data
- Internal linking between Build / Plant / Grow
- `robots.txt` and `sitemap.xml`
- Descriptive image alt text
- `404.html` set to noindex
- Pre-launch rules page set to noindex/follow until it becomes final rules

## Existing integration preserved
The inquiry and giveaway-alert forms still POST to:
`https://formspree.io/f/xwleegod`

## Important launch notes
1. Confirm the production domain is exactly `https://thefarmersbrown.com`. If you standardize on `www`, update every canonical, Open Graph URL, schema URL and sitemap URL accordingly.
2. Add the domain to Google Search Console and submit `/sitemap.xml` after deployment.
3. Add real project/product photos over time. Image filenames, alt text, page context and compressed WebP/AVIF assets will help both conversions and image search.
4. Add an actual business phone/address to LocalBusiness schema only if you decide to publish them. Do not invent or expose private contact information solely for SEO.
5. Nutrition is currently presented as a **future pathway**, not an active clinical/dietetic service. Update the copy only when scope, availability and applicable professional requirements are settled.
6. `Branch & Byte` is currently indexable even though it feels hidden in the UI. If you decide it should be genuinely private, add `<meta name="robots" content="noindex,nofollow">` and remove it from `sitemap.xml`.
7. Giveaway is still pre-launch. Replace the rules-status content only after final promotion details and legal review are complete.

## Deployment
Upload the contents of this folder to the repository root and redeploy on Render.
