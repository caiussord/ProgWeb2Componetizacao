
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.footerContent}>
        
        <div className={styles.infoColumn}>

          <div className={styles.logoContainer}>
            <img src="/Logo 1.svg" alt="Museu de Filmes Brasileiros Logo" className={styles.footerLogo} />
          </div>
          

          <p className={styles.copyright}>© 2024 MUSEU DE FILMES BRASILEIROS</p>
        </div>

        <div className={styles.utilityColumn}>
            
          
            <a href="#" className={styles.faqLink}>FAQ</a>

            <div className={styles.newsletter}>
                <h4 className={styles.newsletterTitle}>Novidades</h4>
                <div className={styles.subscribeForm}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className={styles.emailInput} 
                    />
                    <button className={styles.sendButton}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;