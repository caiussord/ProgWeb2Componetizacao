import React from 'react';
import styles from './Favorites.module.css';
import Category from '../../components/Container/Category/Cards'; 
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const favoriteMovies = [
    { id: 10, posterUrl: '/image 42.svg', title: 'Alemão 2' },
    { id: 11, posterUrl: '/image 44.svg', title: 'Se eu fosse você' },
    { id: 12, posterUrl: '/image 29.svg', title: 'Xuxa abaracadabra' }, 
    { id: 13, posterUrl: '/image 45.svg', title: 'O Candidato Honesto' },
    { id: 14, posterUrl: '/image 22.svg', title: 'Central do Brasil' },
    { id: 15, posterUrl: '/image 18.svg', title: 'Cidade de Deus' }, 
];

function Favorites() {
    const { searchTerm } = useContext(SearchContext);

    const filteredFavorites = favoriteMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                {filteredFavorites.length > 0 ? (
                    <Category title="Favoritos" movies={filteredFavorites} />
                ) : (
                    <p style={{ marginLeft: '80px', marginTop: '20px' }}>Nenhum favorito encontrado para "{searchTerm}"</p>
                )}
            </div>
            
        </main>
    );
}

export default Favorites;