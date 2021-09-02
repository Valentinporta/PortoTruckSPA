import React from 'react';
import Navbar from './components/navbar/Navbar';
import './app.css'
import Inicio from './components/inicio/Inicio';
import Nosotros from './components/nosotros/Nosotros';
import Servicios from './components/servicios/Servicios';
import Imagenes from './components/imagenes/Imagenes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div id='inicio' className='header'>
      <Navbar />
      <Inicio />
      <Nosotros />
      <Servicios />
      <Imagenes />
      <Footer />
    </div>
  );
}

export default App;
