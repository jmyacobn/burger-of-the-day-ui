import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';
import './RecipeContainer.css';

const Recipes = ( {recipes, viewRecipe, filteredRecipes, userInput} ) => {
  let recipesToDisplay
  if(userInput === '') {
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

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  viewRecipe: PropTypes.func.isRequired,
  filteredRecipes: PropTypes.array.isRequired,
  userInput: PropTypes.string.isRequired
}