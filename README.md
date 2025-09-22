# My Frontend Project (Translator + Random String)

## Run locally

1. Install:
   npm install

2. Create `.env` from `.env.example` and add your RapidAPI key/host:
   VITE_RAPIDAPI_KEY=...
   VITE_RAPIDAPI_HOST=...

If you don't set these, the translator runs in demo mode (UI works, but translations are fake).

3. Start:
   npm run dev

## What I used

- React (Vite)
- Tailwind CSS
- react-router-dom
- RapidAPI (for translation API)

Files of interest:

- `src/pages/TranslatorPage.jsx` — translator (uses RapidAPI when configured)
- `src/pages/RandomStringPage.jsx` — uses useState, useCallback, useEffect

## Notes

- If your chosen RapidAPI translation provider requires a different endpoint or request shape, update `TranslatorPage.jsx` fetch URL/body accordingly.
