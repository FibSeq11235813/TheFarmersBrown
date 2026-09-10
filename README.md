# The Farmers Brown — thefarmersbrown.com

Deploy the contents of this folder as the static site for **thefarmersbrown.com**.

## Included
- `index.html` — main Farmers Brown site
- `raised-garden-beds-tampa.html` — focused Tampa Bay raised-bed SEO landing page
- `giveaway.html` / `official-rules.html` — existing campaign pages
- `sitemap.xml` / `robots.txt` — Farmers Brown-only search files
- `404.html` — branded not-found page
- `styles.css` / `script.js` / `assets/`

The subtle “other workshop” link now points to **https://branchandbyte.com/**. No Branch & Byte page is duplicated on this domain.

## Forms
Farmers Brown forms continue to post to the existing Formspree endpoint.

## Optional old-tech URL redirects
The old tech pages were created only recently, so redirects are not required if they were never meaningfully deployed/indexed. If you want belt-and-suspenders cleanup, configure these server-side permanent redirects in Render:
- `/branch-and-byte.html` → `https://branchandbyte.com/`
- `/tampa-bay-web-design.html` → `https://branchandbyte.com/tampa-bay-web-design.html`
- `/computer-repair-tampa.html` → `https://branchandbyte.com/computer-repair-tampa.html`

Do not keep the old tech HTML files on this deployment if you add those redirect rules.
