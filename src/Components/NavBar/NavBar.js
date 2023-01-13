import React from 'react';
import logo from '../../../src/logo.png'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <img className='logo' src={logo} alt='Bobs Burgers Logo'/>
    </nav>
  )
}

export default NavBar;