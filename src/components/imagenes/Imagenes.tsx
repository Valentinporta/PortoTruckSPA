import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import camion1 from '../../assets/camion1.jpg'
import camion2 from '../../assets/camion2.jpg'
import camion3 from '../../assets/camion3.jpg'
import camion4 from '../../assets/portopic.jpg'
import styles from './imagenes.module.css'

const Imagenes = () => {
    const [imagenes] = useState<string[]>([camion4, camion2, camion3, camion1])

    return (
        <div className={styles.galleryContainer}>
            <p className={styles.galleryTitle}>GALERIA DE IMAGENES</p>
            <Carousel className={styles.calecitaContainer}>
                {
                    imagenes.map( image => (
                    <div className={styles.calecitaContainer}>
                        <img src={image} className={styles.calecita}/>
                    </div>))
                }
            </Carousel>
        </div>
    )
};

export default Imagenes;
