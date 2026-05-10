import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Blogs from './pages/Blogs';
import FAQs from './pages/FAQs';
import Team from './pages/Team';
import Downloads from './pages/Downloads';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="activities" element={<Events />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="cadets" element={<Team />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="faqs" element={<FAQs />} />
      </Route>
    </Routes>
  );
}

export default App;
