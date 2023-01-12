import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeContainer.css';

const Recipes = ( {recipes} ) => {
  const eachRecipe = recipes.map(recipe => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        name={recipe.name}
        price={recipe.price}
      />
    )
  })

  return (
    <div className='recipe-container'>
      {eachRecipe}
    </div>
  )
}

export default Recipes;