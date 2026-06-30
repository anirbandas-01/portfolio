# Anirban Das — Portfolio

Built with **React 19 + Vite + Tailwind CSS v4**

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## EmailJS Setup (so you get emails from the contact form)

1. Go to https://emailjs.com → Sign up free
2. Add a **Service** (Gmail works great)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — the message body
4. Open `src/sections/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
   ```

## Certificate Links

Open `src/sections/Certifications.jsx` and replace the `link` values with your real Oracle badge share URLs.

## Project Links

Open `src/sections/Projects.jsx` and replace `live: '#'` and `github: '#'` with your real URLs.

## Resume Download

Place your resume PDF at `public/Anirban_Das_Resume.pdf`

## Deploy to Vercel

```bash
npm run build
# Push to GitHub, then import repo at vercel.com
```
