import React, { useState } from 'react';
import styles from './Faq.module.css';

const faqData = [
    {
        id: 1,
        question: "1 - Não consigo acessar minha conta do Museu de Filmes Brasileiros.",
        answer: "Se aparecer uma mensagem Senha incorreta ou se você esqueceu sua senha, será necessário alterá-la."
    },
    {
        id: 2,
        question: "2 - Mensagem do Museu de Filmes Brasileiros: \"Não foi possível conectar ao Museu de Filmes Brasileiros\".",
        answer: "Verifique a sua conexão com a internet."
    },
    {
        id: 3,
        question: "3 - O Museu de Filmes Brasilerios não está funcionando.",
        answer: "Reinstale o aplicativo Museu de Filmes Brasileiros."
    }
];

function Faq() {
    const [openId, setOpenId] = useState(1);

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className={styles.container}>
            <div className={styles.leftColumn}>
                <h1 className={styles.title}>FAQ</h1>
                <h2 className={styles.subtitle}>Perguntas frequentes</h2>

                <div className={styles.faqList}>
                    {faqData.map((item) => (
                        <div key={item.id} className={styles.faqItem}>
                            <div 
                                className={styles.questionRow} 
                                onClick={() => toggleFaq(item.id)}
                            >
                                <span className={styles.questionText}>{item.question}</span>
                                <span className={`${styles.arrowIcon} ${openId === item.id ? styles.open : ''}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="8 12 12 16 16 12"></polyline>
                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                    </svg>
                                </span>
                            </div>
                            {openId === item.id && (
                                <div className={styles.answer}>
                                    <span className={styles.highlight}>Resposta: </span>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.rightColumn}>
                <h2 className={styles.contactTitle}>Fale conosco</h2>
                <p className={styles.contactDesc}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>

                <form className={styles.contactForm}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Nome</label>
                            <input type="text" placeholder="Gabriela Silveira" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email</label>
                            <input type="email" placeholder="gabimedadez@gmail.com" className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Mensagem</label>
                        <textarea placeholder="Escreva sua Mensagem" className={styles.textarea}></textarea>
                    </div>

                    <button type="button" className={styles.submitButton}>Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Faq;