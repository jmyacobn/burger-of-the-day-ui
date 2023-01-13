import React from 'react';
import './RecipeCard.css';

const RecipeCard = ( { viewRecipe, id, name, price} ) => {
  return (
    <article onClick={()=> viewRecipe(id)} className='recipe-card' key={id}>
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
  )
}

export default RecipeCard;