import React from 'react'
import './Footer.css';
import git from './github.png';

const Footer = () => {
  return (
    <div className='footer'><p>Desenvolvido por <a href="https://github.com/Matthbarreto">Matheus <img src={git} target="_blank" alt="Matheus"/></a></p></div>
  )
}

export default Footer