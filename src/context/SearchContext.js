import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  
  useEffect(() => {
    setSearchTerm(''); 
  }, [location.pathname]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};