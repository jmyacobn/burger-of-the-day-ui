import React from 'react';
import './RecipeCard.css';

const RecipeCard = ( { id, name, price} ) => {
  return (
    <div className='recipe-card' key={id}>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}

export default RecipeCard;