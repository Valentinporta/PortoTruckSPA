import React from 'react';
import Logo from '../logo/Logo';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <Logo />
            </div>

            <ul className={styles.navList}>
                <li className={styles.listItem}><p>Inicio</p></li>
                <li className={styles.listItem}><p>Nosotros</p></li>
                <li className={styles.listItem}><p>Servicios</p></li>
                <li className={styles.listItem}><p>Imagenes</p></li>
                <li className={styles.listItem}><p>Contacto</p></li>
            </ul>
            
        </div>
    )
}

export default Navbar
