import styles from './Cards.module.css';

function Cards() {
  return (
    <section className={styles.cards}>
      <h3>Cards Aqui</h3>
      <div className={styles.cardContainer}>
        <div className={styles.card}>Card 1</div>
        <div className={styles.card}>Card 2</div>
        <div className={styles.card}>Card 3</div>
      </div>
    </section>
  );
}

export default Cards;