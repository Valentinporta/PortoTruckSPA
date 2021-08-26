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
                <img src={props.icon} style={{height: '80px'}}/>
            </div>

            <div>
                <h2>{props.title}</h2>
            </div>

            <div>
                <p>{props.text}</p>
            </div>

        </div>
    )
};

export default Tarjeta;
