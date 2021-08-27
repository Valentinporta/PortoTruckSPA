import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div id='contacto' className={styles.footerContainer}>
            <p className={styles.footerTitle}>Contactanos!</p>
            <ul className={styles.footerList}>
                <li className={styles.footerListItem}><p>Celular: 12345678910</p></li>
                <li className={styles.footerListItem}><p>Nextel: 12345678910</p></li>
                <li className={styles.footerListItem}><p>Email: portotrucksrl@gmail.com</p></li>
                <li className={styles.footerListItem}><p>Dirección: 3 de Febrero 2600, San Pedro Buenos Aires</p></li>
            </ul>
        </div>
    )
};

export default Footer;