
import React from 'react';
import styles from './Card.module.css';

function MovieCard({ posterUrl, altText }) {
  return (
    <div className={styles.movieCard}>

      <img src={posterUrl} alt={altText} className={styles.poster} />
    </div>
  );
}

export default MovieCard;