import React from 'react';
import logo from '../../../src/assets/logo.png';
import { NavLink } from 'react-router-dom';
import '../NavBar/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/' activeClassName='active'>
        <img className='logo' src={logo} alt='Bobs Burgers Logo'/>
      </NavLink>
    </nav>
   
  )
}

export default NavBar;