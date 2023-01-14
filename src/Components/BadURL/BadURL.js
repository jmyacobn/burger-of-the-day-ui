import React from 'react'
import './BadURL.css'
import error from '../../assets/error.png'
import {Link} from 'react-router-dom'

const BadURL = () => {
  return (
    <div className='error-container'>
      <h2 className='error'>Oops, URL not found. Please try again.</h2>
      <Link to='/'>
        <button className="redirect-button">Redirect Home</button>
      </Link>
      <img className='error-img' src={error} alt='Louise with scared look on her face.'/>  
    </div>
  )
}

export default BadURL;