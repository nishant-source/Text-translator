/* This is from where my React App going to start.

Defines routes using React Router:

/ → Home page

/translator → Translator page

/random → Random String page

So, when you visit http://localhost:5173/translator, it knows to show TranslatorPage.

 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TranslatorPage from "./pages/TranslatorPage";
import RandomStringPage from "./pages/RandomStringPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // It creates the root (ReactDOM.createRoot) and wraps everything in <BrowserRouter>.

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="translator" element={<TranslatorPage />} />
          <Route path="random" element={<RandomStringPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
