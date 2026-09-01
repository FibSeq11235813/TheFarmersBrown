# The Farmers Brown website refresh

A static, GitHub/Render-ready site for The Farmers Brown.

## Files

- `index.html` — main site, now with giveaway campaign promotion
- `giveaway.html` — dedicated pre-launch garden bed giveaway landing page
- `official-rules.html` — pre-launch rules/status page; replace with reviewed final Official Rules before accepting entries
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

## Giveaway campaign status

The giveaway is intentionally shipped in **PRE-LAUNCH** mode.

- The email form on `giveaway.html` is a launch-alert signup only; it is explicitly not an entry form.
- Current purchases do not earn entries.
- `official-rules.html` lists the items that must be finalized before launch.
- Before accepting sweepstakes entries, finalize the eligible area, dates, exact prize + ARV, free alternative method of entry, any purchase-related promotional-entry mechanics, winner-selection process, privacy terms, and any required state filings/bonding.
- Have the final structure and Official Rules reviewed for every jurisdiction in which the promotion will be offered.

Once those pieces are final, replace the pre-launch copy rather than merely removing the words “coming soon.” The entry form/process should match the reviewed Official Rules exactly.
