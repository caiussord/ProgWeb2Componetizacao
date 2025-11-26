import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Favorites from './pages/Favorites'; 
import Watch from './pages/Watch';
import Faq from './pages/Faq';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/favoritos" element={<Favorites />} /> 
      
      <Route path="/faq" element={<Faq />} /> 

      <Route path="/watch/:id" element={<Watch />} />
    </Routes>
  );
}

export default AppRoutes;