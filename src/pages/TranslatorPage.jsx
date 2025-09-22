import React, { useState, useEffect } from "react";

const TranslatorPage = () => {
  const [languages, setLanguages] = useState([]);
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("hi");
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  // Fallback list if API doesn’t load
  const FALLBACK_LANGUAGES = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "hi", name: "Hindi" },
    { code: "ar", name: "Arabic" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
    { code: "ru", name: "Russian" },
  ];

  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
  const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;

  // Fetch languages once when page loads
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch(
          "https://text-translator2.p.rapidapi.com/getLanguages",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": apiKey,
              "x-rapidapi-host": apiHost,
            },
          }
        );
        const data = await res.json();
        if (data?.data?.languages) {
          setLanguages(data.data.languages);
        }
      } catch (err) {
        console.error("Error fetching languages:", err);
      }
    };
    fetchLanguages();
  }, [apiKey, apiHost]);

  // Translate handler
  const handleTranslate = async () => {
    setLoading(true);
    setTranslated("");
    try {
      const res = await fetch(
        "https://text-translator2.p.rapidapi.com/translate",
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": apiHost,
          },
          body: new URLSearchParams({
            source_language: fromLang,
            target_language: toLang,
            text: text,
          }),
        }
      );

      const data = await res.json();

      if (data?.data?.translatedText) {
        setTranslated(data.data.translatedText);
      } else {
        setTranslated("Translation failed.");
      }
    } catch (err) {
      console.error(err);
      setTranslated("Translation failed.");
    } finally {
      setLoading(false);
    }
  };

  const langOptions = languages.length > 0 ? languages : FALLBACK_LANGUAGES;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Text Translator</h1>

      {/* From Language Dropdown */}
      <label className="block mb-2">From:</label>
      <select
        value={fromLang}
        onChange={(e) => setFromLang(e.target.value)}
        className="p-2 border rounded mb-4"
      >
        {langOptions.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      {/* To Language Dropdown */}
      <label className="block mb-2">To:</label>
      <select
        value={toLang}
        onChange={(e) => setToLang(e.target.value)}
        className="p-2 border rounded mb-4"
      >
        {langOptions.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      {/* Text Area */}
      <textarea
        className="border p-2 w-full rounded mb-4"
        rows="4"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={handleTranslate}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      {/* Output */}
      {translated && (
        <div className="mt-4 p-3 border rounded bg-gray-50">
          <strong>Result:</strong>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
};

export default TranslatorPage;
