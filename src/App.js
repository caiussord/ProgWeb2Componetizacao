
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import AppRoutes from './router.js'; 

function App() {

  return (
    <Router>
      <Header />
      <AppRoutes /> 
      
      <Footer />
    </Router>
  );
}

export default App;