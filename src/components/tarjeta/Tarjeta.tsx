import React from 'react';
import styles from './tarjeta.module.css';

interface InterfazTarjeta{
    icon: string;
    title: string;
    text: string;
}

const Tarjeta = (props: InterfazTarjeta) => {
    return (
        <div className={styles.containerTarj}>

            <div>
                <img src={props.icon} className={styles.icon} alt='tarjeta'/>
            </div>

            <div>
                <h2 className={styles.cardTitle}>{props.title}</h2>
            </div>

            <div>
                <p className={styles.cardText}>{props.text}</p>
            </div>

        </div>
    )
};

export default Tarjeta;
