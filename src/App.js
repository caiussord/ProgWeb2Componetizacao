import './App.css';
import Header from './components/index.js'; 
import Banner from './components/Banner';
import Cards from './components/Container/Category/Cards/index.js';
import Footer from './components/Footer';

function App() {
  return (
    // Fragment <> para agrupar todos os componentes
    <>
      <Header />
      <Banner />
      <Cards />
      <Footer />
    </>
  );
}

export default App;