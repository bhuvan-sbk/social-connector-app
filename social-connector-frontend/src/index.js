import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
