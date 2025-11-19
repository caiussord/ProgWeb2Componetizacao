
import styles from './Banner.module.css';

const BANNER_IMAGE_URL = '/maxresdefault.svg'; 

function Banner() {
  return (
    <section 
      className={styles.banner}

      style={{ '--banner-bg': `url(${BANNER_IMAGE_URL})` }}
    >
      <div className={styles.bannerContent}>
        <button className={styles.watchButton}>
          Assista agora <span className={styles.arrow}>▶</span>
        </button>
      </div>
    </section>
  );
}

export default Banner;