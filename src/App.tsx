import React from 'react';
import Navbar from './components/navbar/Navbar';
import './app.css'
import Inicio from './components/inicio/Inicio';
import Nosotros from './components/nosotros/Nosotros';
import Servicios from './components/servicios/Servicios';
import Imagenes from './components/imagenes/Imagenes';

function App() {
  return (
    <div>
      <div className='header'>
        <Navbar />
        <Inicio />
        <Nosotros />
        <Servicios />
        <Imagenes />
      </div>
    </div>
  );
}

export default App;
