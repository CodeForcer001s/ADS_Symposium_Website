import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/globals.css';
import './styles/space-theme.css';
import './styles/components.css';

function App() {
  return (
    <div className="app bg-space-black min-h-screen text-stellar-silver">
      <Outlet />
    </div>
  );
}

export default App;
