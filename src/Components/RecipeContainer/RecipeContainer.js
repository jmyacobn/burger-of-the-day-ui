import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeContainer.css';

const Recipes = ( {recipes, viewRecipe, filteredRecipes} ) => {
  let recipesToDisplay
  if(filteredRecipes.length===0) {
    recipesToDisplay = recipes;
  } else {
    recipesToDisplay = filteredRecipes;
  }
  
  const eachRecipe = recipesToDisplay.map(recipe => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        name={recipe.name}
        price={recipe.price}
        viewRecipe={viewRecipe}
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