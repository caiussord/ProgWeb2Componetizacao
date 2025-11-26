
import React, { useRef } from 'react';
import styles from './Cards.module.css';
import MovieCard from '../Card'; 


const DUMMY_MOVIES = [
  { id: 1, posterUrl: '/image 18.svg', title: 'Central do Brasil' },

];

function Category({ title, movies = DUMMY_MOVIES }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {

      const scrollAmount = 1090; 
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>{title || "Categoria"}</h2>
      <div className={styles.carouselWrapper}>
        
        <button onClick={() => scroll('left')} className={`${styles.scrollButton} ${styles.left}`}>
          {'<'}
        </button>

        <div className={styles.cardContainer} ref={scrollRef}>
          {movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              id={movie.id}
              posterUrl={movie.posterUrl} 
              altText={movie.title} 
            />
          ))}
        </div>

        <button onClick={() => scroll('right')} className={`${styles.scrollButton} ${styles.right}`}>
          {'>'}
        </button>
      </div>
    </section>
  );
}

export default Category;