import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Activites from './pages/Activites';
import Programmes from './pages/Programmes';
import Galerie from './pages/Galerie';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminFormations from './pages/Admin/AdminFormations';
import AdminEvenements from './pages/Admin/AdminEvenements';
import AdminStatistiques from './pages/Admin/AdminStatistiques';
import AdminTemoignages from './pages/Admin/AdminTemoignages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activites />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/gallery" element={<Galerie />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/formations" element={<AdminFormations />} />
        <Route path="/admin/evenements" element={<AdminEvenements />} />
        <Route path="/admin/statistiques" element={<AdminStatistiques />} />
        <Route path="/admin/temoignages" element={<AdminTemoignages />} />
      </Routes>
    </Router>
  );
}

export default App;