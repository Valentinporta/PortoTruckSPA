import React from 'react'
import styles from './inicio.module.css'

const Inicio = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerText}>
                <p className={styles.headerTitle}>PortoTruck SRL</p>
                <div className={styles.headerSubTitle}>
                    <h2>Más de 10 años prestando servicios de transporte de la más alta cálidad</h2>
                </div>
            </div>
        </div>
    )
}

export default Inicio
