import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Details.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
