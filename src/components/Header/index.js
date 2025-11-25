import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

function Header() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}> 
        <div className={styles.logoContainer}>
          <img src="/Logo 1.svg" alt="Museu de Filmes Brasileiros Logo" className={styles.logo} />
        </div>
      </Link>
      
      <div className={styles.searchContainer}>
        <input 
            type="text" 
            placeholder="Pesquisar filmes..." 
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <nav className={styles.navContainer}>
        <Link to="/faq" className={styles.navLink}>FAQ</Link>
        <Link to="/" className={styles.navLink}>Catálogo</Link> 
        <Link to="/favoritos" className={styles.navLink}>Favoritos</Link>
        
        <div className={styles.userIconContainer}>
          <img src="/Usuario.svg" alt="Ícone de Perfil" className={styles.userIcon} />
        </div>
      </nav>
    </header>
  );
}

export default Header;