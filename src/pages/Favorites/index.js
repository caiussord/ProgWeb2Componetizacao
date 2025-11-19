import React from 'react';
import styles from './Favorites.module.css';
import Category from '../../components/Container/Category/Cards'; 


const favoriteMovies = [
    { id: 10, posterUrl: '/image 42.svg', title: 'Tropa de Elite' },
    { id: 11, posterUrl: '/image 44.svg', title: 'Cidade de Deus' },
    { id: 12, posterUrl: '/image 23.svg', title: 'O Candidato Honesto' }, 
    { id: 13, posterUrl: '/image 45.svg', title: 'Alemão 2' },
];


function Favorites() {
  return (
    <main className={styles.favoritesPage}>
        
        <section className={styles.profileSection}>
            <div className={styles.profileContent}>

                <div className={styles.userIconContainer}>
                    <img src="/Usuario.svg" alt="Ícone de Perfil" className={styles.userIcon} />
                </div>
                
                <div className={styles.userInfo}>
                    <h2 className={styles.userName}>Nome do usuário</h2>
                    <p className={styles.userEmail}>usuario@gmail.com</p>
                </div>
            </div>
        </section>

        <div className={styles.favoritesList}>
            <Category title="Favoritos" movies={favoriteMovies} />
        </div>
        
    </main>
  );
}

export default Favorites;