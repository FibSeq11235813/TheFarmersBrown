# The Farmers Brown — Website Draft

A responsive one-page static website for **The Farmers Brown**, designed around the warm, vintage backyard-garden / farmers-market style direction.

## Preview locally

Open `index.html` in a browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before launch

1. In `script.js`, verify the contact email and Instagram URL:

```js
const SITE = {
  contactEmail: "hello@thefarmersbrown.com",
  instagramUrl: "https://instagram.com/thefarmersbrown"
};
```

2. Replace the illustrated project sections with real build photos once available.
3. Confirm wording, service area, and whether pickup/delivery/installation are offered.
4. Add final pricing only after the product lineup is settled.

## Deploy through GitHub + Render

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. In Render, create a **Static Site** and connect the repository.
4. Build command: leave blank.
5. Publish directory: `.`
6. Add `thefarmersbrown.com` under **Custom Domains** in Render.
7. Follow Render's DNS instructions in Porkbun.

The included `render.yaml` can also be used for a Render Blueprint deployment.

## Current page sections

- Sticky navigation
- Illustrated hero section
- Product/build overview
- Benefits of elevated garden beds
- Three-step project process
- About Tyler and Amanda
- Quote form that opens a pre-filled email
- Mobile navigation and responsive layouts
- Basic SEO metadata and local-business structured data

## Color palette

- Forest green: `#24452f`
- Warm cream: `#f5eddd`
- Tomato/rust: `#a95834`
- Mustard gold: `#d8aa37`
- Garden sage: `#789069`
