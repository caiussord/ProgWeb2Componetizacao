
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function MovieCard({ id, posterUrl, altText }) {
  return (
    <div className={styles.movieCard}>
      <Link to={`/watch/${id}`} className={styles.link}>
        <img src={posterUrl} alt={altText} className={styles.poster} />
      </Link>
    </div>
  );
}

export default MovieCard;