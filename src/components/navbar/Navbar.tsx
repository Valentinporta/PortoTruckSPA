import React, { useState } from 'react';
import Logo from '../logo/Logo';
import styles from './navbar.module.css';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [clicked, setClicked] = useState(false)
    
    const changeBg = () => {
        let top = window.scrollY
        if (top !== 0) {
            setNav(false)
        } else {
            setNav(true)
        }
    }

    const handleClick = () => {
        setClicked(prev => !prev)
    }

    window.addEventListener('scroll', changeBg)

    return (
        <div className={nav ? `${styles.container} ${styles.coloredBg}` : `${styles.container} ${styles.transparentBg}`}>
            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.hamburgerMenu} onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={clicked ? `${styles.navList} ${styles.active}` : styles.navList}>
                <li className={styles.listItem}><Link to='inicio' spy={true} smooth={true}><p onClick={handleClick}>Inicio</p></Link></li>
                <li className={styles.listItem}><Link to='nosotros' spy={true} smooth={true}><p onClick={handleClick}>Nosotros</p></Link></li>
                <li className={styles.listItem}><Link to='servicios' spy={true} smooth={true}><p onClick={handleClick}>Servicios</p></Link></li>
                <li className={styles.listItem}><Link to='imagenes' spy={true} smooth={true}><p onClick={handleClick}>Imagenes</p></Link></li>
                <li className={styles.listItem}><Link to='contacto' spy={true} smooth={true}><p onClick={handleClick}>Contacto</p></Link></li>
            </ul>
            
        </div>
    )
}

export default Navbar
