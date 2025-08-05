// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import EventCard3DCall from "./components/EventCard3DCall";

import "./styles/globals.css";
import "./styles/space-theme.css";
import "./styles/components.css";

const DataFlix = () => <EventCard3DCall eventId="dataflix" />;
const HackOrHaunt = () => <EventCard3DCall eventId="hack-or-haunt" />;
const Codesync = () => <EventCard3DCall eventId="codesync" />;
const PromptEFlux = () => <EventCard3DCall eventId="prompt-e-flux" />;
const Techverse = () => <EventCard3DCall eventId="techverse" />;

function App() {
  return (
    <div className="app bg-space-black min-h-screen text-stellar-silver">
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
