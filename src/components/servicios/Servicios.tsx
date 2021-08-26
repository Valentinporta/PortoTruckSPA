import React from 'react';
import styles from './servicios.module.css';
import truck from '../../assets/truckIcon.svg';
import danger from '../../assets/dangerIcon.svg';

const Servicios = () => {
    const cargasGenerales = 'Dentro del tipo de cargas "generales" se encuentran elementos como Bobina, placas de acero, rieles de tren, cartón, papel, ladrillos, partes electrónicos, vehiculos, partes de maquinaria, entre muchas cosas más!'
    const cargasPeligrosas = 'De la mano de personal altamente capacitado mediante cursos y entrenamiento brindamos el servicio de manejar cargas "peligrosas" como químicos, metales preciosos, pinturas o cargamento valioso que requiere de un auto de custodia que acompañe.'
    return (
        <div className={styles.serviciosContainer}>

            <p className={styles.serviciosTitle}>Nuestra operación</p>

            <div className={styles.serviciosText}>
                    <img src={truck} className={styles.serviciosImg}/>
                <div style={{maxWidth: '500px'}}>
                    <h2>Cargas Generales</h2>
                    <p>{cargasGenerales}</p>
                </div>
            </div>

            <div className={styles.serviciosText}>
                <div style={{maxWidth: '500px'}}>
                    <h2>Cargas Peligrosas</h2>
                    <p>{cargasPeligrosas}</p>
                </div>
                <img src={danger} className={styles.serviciosImg}/>
            </div>

            <div>
                {/* Pequeño div con logos de los clientes (siderar, sidersa, campana, etc.) */}
            </div>

        </div>
    )
};

export default Servicios;
