# The Farmers Brown website refresh

A static, GitHub/Render-ready site for The Farmers Brown.

## Files

- `index.html` — page structure and content
- `styles.css` — full responsive design
- `script.js` — mobile navigation, reveal effects, and current year
- `assets/favicon.svg` — browser icon

## Deploy

Replace the matching files in the existing GitHub repository, commit, and push. Render should redeploy automatically if it is connected to that branch.

For a Render Static Site, use:

- Build command: leave blank
- Publish directory: `.`

## Before launch

1. Test the quote form on desktop and mobile and confirm submissions appear in Formspree.
2. Keep direct email, phone, and social contact details off the public site; all inquiries are intentionally routed through the quote form.
3. The form includes a basic honeypot field to reduce automated spam submissions.
4. Replace illustrated sections with project photography later as strong photos become available.

## Quote form

The quote form submits directly to Formspree using:

- Endpoint: `https://formspree.io/f/xwleegod`
- Method: `POST`

All customer-facing form fields include `name` attributes, so their values will be included in each Formspree submission.
