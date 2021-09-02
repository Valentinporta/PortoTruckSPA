import React from 'react';
import styles from './footer.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ContactForm from '../contactForm/ContactForm';

const Footer = () => {
    const year = new Date().getFullYear()
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
            <ContactForm />
            <ul className={styles.footerList}>
                <li className={styles.footerListItem}><p>Celular:<br />12345678910</p></li>
                <li className={styles.footerListItem}><p>Email:<br />portotrucksrl@gmail.com</p></li>
                <li className={styles.footerListItem}><p>Nextel:<br />12345678910</p></li>
                <li className={styles.footerListItem}><p>Dirección:<br />3 de Febrero 2600, San Pedro Buenos Aires</p></li>
            </ul>
            <p><i className='far fa-copyright'></i> 2005 - {year} Porto Truck SRL</p>
        </div>
    )
};

export default Footer;