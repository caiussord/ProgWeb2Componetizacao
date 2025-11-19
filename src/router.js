import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Favorites from './pages/Favorites'; 

const Faq = () => <div style={{padding: '50px', color: 'white', backgroundColor: '#004116'}}>
    <h1>Página FAQ</h1>
    <p>Conteúdo de Perguntas Frequentes.</p>
</div>;


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/favoritos" element={<Favorites />} /> 
      
      <Route path="/faq" element={<Faq />} /> 
    </Routes>
  );
}

export default AppRoutes;