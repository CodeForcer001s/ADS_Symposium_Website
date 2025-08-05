// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
// Import the correct page components instead of EventDetail
import DataFlix from "./pages/DataFlix";
import HackOrHaunt from "./pages/HackOrHaunt";
import Codesync from "./pages/Codesync";
import PromptEFlux from "./pages/PromptEFlux";
import Techverse from "./pages/Techverse";

import "./styles/globals.css";
import "./styles/space-theme.css";
import "./styles/components.css";

function App() {
  return (
    <div className="app bg-black min-h-screen text-stellar-silver">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/events" element={<MainLayout />} />
          <Route path="/events/dataflix" element={<DataFlix />} />
          <Route path="/events/hack-or-haunt" element={<HackOrHaunt />} />
          <Route path="/events/codesync" element={<Codesync />} />
          <Route path="/events/prompt-e-flux" element={<PromptEFlux />} />
          <Route path="/events/techverse" element={<Techverse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
