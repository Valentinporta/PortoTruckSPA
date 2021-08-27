import React, { useState } from 'react';
import Logo from '../logo/Logo';
import styles from './navbar.module.css';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    const changeBg = () => {
        let top = window.scrollY
        if (top !== 0) {
            setNav(false)
        } else {
            setNav(true)
        }
    }

    window.addEventListener('scroll', changeBg)

    return (
        <div className={nav ? `${styles.container} ${styles.coloredBg}` : `${styles.container} ${styles.transparentBg}`}>
            <div>
                <Logo />
            </div>

            <ul className={styles.navList}>
                <li className={styles.listItem}><Link to='inicio' spy={true} smooth={true}><p>Inicio</p></Link></li>
                <li className={styles.listItem}><Link to='nosotros' spy={true} smooth={true}><p>Nosotros</p></Link></li>
                <li className={styles.listItem}><Link to='servicios' spy={true} smooth={true}><p>Servicios</p></Link></li>
                <li className={styles.listItem}><Link to='imagenes' spy={true} smooth={true}><p>Imagenes</p></Link></li>
                <li className={styles.listItem}><Link to='contacto' spy={true} smooth={true}><p>Contacto</p></Link></li>
            </ul>
            
        </div>
    )
}

export default Navbar
