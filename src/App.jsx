import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

// Home ships in the main bundle; every other page loads on first visit.
const About = lazy(() => import('./pages/About'));
const Events = lazy(() => import('./pages/Events'));
const Camps = lazy(() => import('./pages/Camps'));
const FAQs = lazy(() => import('./pages/FAQs'));
const Team = lazy(() => import('./pages/Team'));
const Downloads = lazy(() => import('./pages/Downloads'));
const Join = lazy(() => import('./pages/Join'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="activities" element={<Events />} />
        <Route path="camps" element={<Camps />} />
        <Route path="cadets" element={<Team />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="join" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
