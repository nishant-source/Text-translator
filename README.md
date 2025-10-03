# My Frontend Project (Translator + Random String)

This is a small React + Vite project that includes:

- **Text Translator** — translate text between multiple languages using RapidAPI.
- **Random String Generator** — generate random strings with configurable length and character set.

You can see it live here: [https://text-translation-live.netlify.app/](https://text-translation-live.netlify.app/)

---

## Run Locally

1. Clone the repository:

```bash
git clone https://github.com/nishant-source/Text-translator.git
cd Text-translator
Install dependencies:

npm install
Create a .env file from .env.example and add your RapidAPI credentials:

VITE_RAPIDAPI_KEY=your_rapidapi_key_here
VITE_RAPIDAPI_HOST=text-translator2.p.rapidapi.com
If you don’t set these, the translator will run in demo mode (UI works, but translations are fake).

Start the development server:

npm run dev
What I Used
React (with Vite)

Tailwind CSS

react-router-dom

RapidAPI (for translation API)

Files of Interest
src/pages/TranslatorPage.jsx — Translator page (uses RapidAPI when configured)

src/pages/RandomStringPage.jsx — Random string generator (uses useState, useCallback, useEffect)

src/components/Navbar.jsx — Navigation bar

public/_redirects — Netlify SPA routing fix
