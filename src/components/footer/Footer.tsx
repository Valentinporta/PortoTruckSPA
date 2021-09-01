import React from 'react';
import styles from './footer.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Footer = () => {
    return (
        <div id='contacto' className={styles.footerContainer}>
            <MapContainer center={[-33.692148582048226, -59.64825188247482]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-33.692148582048226, -59.64825188247482]}>
                    <Popup>
                    Oficina Porto Truck SRL
                    </Popup>
                </Marker>
            </MapContainer>
            <p className={styles.footerTitle}>Contactanos!</p>
            <ul className={styles.footerList}>
                <li className={styles.footerListItem}><p>Celular: 12345678910</p></li>
                <li className={styles.footerListItem}><p>Email: portotrucksrl@gmail.com</p></li>
                <li className={styles.footerListItem}><p>Nextel: 12345678910</p></li>
                <li className={styles.footerListItem}><p>Dirección: 3 de Febrero 2600, San Pedro Buenos Aires</p></li>
            </ul>
        </div>
    )
};

export default Footer;