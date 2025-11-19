// src/components/Header/index.js
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
    <Link to="/" className={styles.logoLink}> 
        <div className={styles.logoContainer}>
          <img src="/Logo 1.svg" alt="Museu de Filmes Brasileiros Logo" className={styles.logo} />
        </div>
      </Link>
      
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