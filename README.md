# My Frontend Project (Translator + Random String)

A small React + Vite project that includes:

- **Text Translator** — Translate text between multiple languages using RapidAPI.
- **Random String Generator** — Generate random strings with customizable length and character set.

**Live Demo:** [https://text-translation-live.netlify.app/](https://text-translation-live.netlify.app/)

---

## Features

- React (Vite) frontend
- Tailwind CSS for styling
- React Router DOM for page navigation
- RapidAPI integration for text translation
- SPA routing configured for Netlify

---

## Getting Started (Run Locally)

1. **Clone the repository:**

```bash
git clone https://github.com/nishant-source/Text-translator.git
cd Text-translator 
```

Install dependencies:

```bash
npm install
```

Create a .env file based on .env.example and add your RapidAPI credentials:

```bash
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
VITE_RAPIDAPI_HOST=text-translator2.p.rapidapi.com
```
If you don’t set these, the translator will run in demo mode (UI works but translations are fake).


Start the development server:

```bash
npm run dev
Open http://localhost:5173 in your browser.
```

# Important Files
- src/pages/TranslatorPage.jsx — Translator page logic

- src/pages/RandomStringPage.jsx — Random string generator logic

- src/components/Navbar.jsx — Navigation bar component

- public/_redirects — Netlify configuration to handle SPA routing

# Notes
- If your chosen RapidAPI translation provider requires a different endpoint or request format, update the fetch URL/body in TranslatorPage.jsx.

- Direct links like /translator or /random work because of the _redirects file in Netlify.

- The current RapidAPI key is bundled into the frontend. For production, consider using a Netlify Function to keep it secret.

# Live Demo
Check it out here: https://text-translation-live.netlify.app/
