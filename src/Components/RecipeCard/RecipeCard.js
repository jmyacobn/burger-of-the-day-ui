import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './RecipeCard.css';

const RecipeCard = ( { viewRecipe, id, name, price} ) => {
  return (
    <Link to={`/recipe/${id}`}>
      <article onClick={()=> viewRecipe(id)} className='recipe-card' key={id} id={id}>
        <div className='label'>
        <h2>Burger of the Day</h2>
        </div>
        <div className='name'>
          <h2>{name}</h2>
        </div>
        <div className='price'>
          <p>{price}</p>
        </div>
      </article>
    </Link>
  )
}

export default RecipeCard;

RecipeCard.propTypes = {
  viewRecipe: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}