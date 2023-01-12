import React from 'react';
import './RecipeCard.css';

const RecipeCard = ( { id, name, price} ) => {
  return (
    <div className='recipe-card' key={id}>
      <div className='label'>
      <h2>Burger of the Day</h2>
      </div>
      <div className='name'>
        <h2>{name}</h2>
      </div>
      <div className='price'>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default RecipeCard;