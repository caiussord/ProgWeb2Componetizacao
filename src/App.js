import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import AppRoutes from './router.js'; 
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <Router>
      <SearchProvider>
        <Header />
        <AppRoutes /> 
        <Footer />
      </SearchProvider>
    </Router>
  );
}

export default App;