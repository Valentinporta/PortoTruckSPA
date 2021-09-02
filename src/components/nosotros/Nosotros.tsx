import React from 'react';
import Tarjeta from '../tarjeta/Tarjeta';
import styles from './nosotros.module.css'
import truck from '../../assets/truckIcon.svg'
import danger from '../../assets/dangerIcon.svg'
import globe from '../../assets/globeIcon.svg'

const Nosotros = () => {
    const year = new Date().getFullYear()
    const cargasGrales = 'Nuestros choferes estan capacitados para transportar todo tipo de cargas generales.'
    const cargasPeligrosas = 'Nuestros choferes también cuentan con capacitación para transportar cargas peligrosas.'
    const viajes = 'Contamos con camiones 100% habilitados para soportar viajes de corta y larga distancia para poder cumplir con todos los requisitos de nuestros clientes.'
    
    return (
        <div id='nosotros' className={styles.containerNosotros}>
            <p className={styles.nosotrosTitle}>Sobre nosotros</p>
            <p className={styles.nosotrosInfo}>Somos una empresa de transporte con mas de {year - 2005} años en el rubro con sede en San Pedro, Buenos Aires. Realizamos viajes para todo tipo de cargas y para todo el país.</p>
            <div className={styles.tarjetas}>
                <Tarjeta icon={truck} title='Cargas generales' text={cargasGrales}/>
                <Tarjeta icon={danger} title='Cargas peligrosas' text={cargasPeligrosas}/>
                <Tarjeta icon={globe} title='Viajes de corta y larga distancia' text={viajes}/>
            </div>
        </div>
    )
};

export default Nosotros;
