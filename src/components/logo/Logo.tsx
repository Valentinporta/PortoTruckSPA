import React from 'react';
import logo from '../../assets/portologo.png'
import './logo.module.css'

const Logo = () => {
    return (
        <div className='container'>
            <img src={logo} className='image' alt='logo'/>
        </div>
    )
};

export default Logo;
