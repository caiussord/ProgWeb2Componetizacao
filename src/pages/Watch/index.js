import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Watch.module.css';
import movies from '../../movies/moviesDb.json';

function Watch() {
    const { id } = useParams();
    const movie = movies.movies.find(m => m.id === parseInt(id));

    if (!movie) {
        return <div className={styles.container}><h1>Filme não encontrado!</h1></div>;
    }

    return (
        <section 
            className={styles.container}
            style={{ '--bg-image': `url('${movie.posterUrl}')` }}
        >
            <div className={styles.content}>
                <div className={styles.tagsContainer}>
                    {movie.genre.split(',').map((g, index) => (
                        <div key={index} className={styles.tag}>{g.trim()}</div>
                    ))}
                </div>
                <h1 className={styles.title}>{movie.title}</h1>
                <p className={styles.description}>{movie.description}</p>
                
                <div className={styles.meta}>
                    <span>{movie.year}</span>
                    <span className={styles.separator}>|</span>
                    <span>Classificação etária: {movie.rating}</span>
                    <span className={styles.separator}>|</span>
                    <span>{movie.duration}</span>
                    <span className={styles.separator}>|</span>
                    <span>{movie.genre}</span>
                </div>

                <button className={styles.watchButton}>
                    Assistir <span className={styles.playIcon}>▶</span>
                </button>

                <div className={styles.footerInfo}>
                    <div className={styles.infoItem}>
                        <div className={styles.iconPlaceholder}><img src="/Usuario.svg" alt="icon" /></div>
                        <div>
                            <span className={styles.infoLabel}>Atriz Principal</span>
                            <span className={styles.infoValue}>{movie.cast}</span>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.iconPlaceholder}><img src="/Usuario.svg" alt="icon" /></div>
                        <div>
                            <span className={styles.infoLabel}>Diretor</span>
                            <span className={styles.infoValue}>{movie.director}</span>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.iconPlaceholder}><img src="/Usuario.svg" alt="icon" /></div>
                        <div>
                            <span className={styles.infoLabel}>Nota do Público</span>
                            <span className={styles.infoValue}>{movie.score}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Watch;