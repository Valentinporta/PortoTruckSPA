import React from 'react';
import Logo from '../logo/Logo';
import styles from './inicio.module.css';

const Inicio = () => {
    const year = new Date().getFullYear()
    return (
        <div id='inicio' className={styles.headerContainer}>
            <div className={styles.headerText}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <p className={styles.headerTitle}>PortoTruck SRL</p>
                <div className={styles.headerSubTitle}>
                    <h2>{year - 2005} años prestando servicios de transporte de la más alta cálidad</h2>
                </div>
            </div>
        </div>
    )
}

export default Inicio
