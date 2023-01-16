import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import PropTypes from 'prop-types';
import './RecipeContainer.css';

const Recipes = ( {recipes, viewRecipe, filteredRecipes, userInput, loading} ) => {
  let recipesToDisplay
  userInput === '' ? recipesToDisplay = recipes : recipesToDisplay = filteredRecipes
  
  const createDisplay = (recipesToDisplay) => {
    if(recipesToDisplay.length > 0) {
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
      return eachRecipe
    } 
    else if (recipesToDisplay.length === 0 && !loading) {
      return (
        <h2 className="empty-error">There are currently no recipes available with this ingredient. Please try another ingredient.</h2>
      )
    }
  }

  const userDisplay = createDisplay(recipesToDisplay)

  return (
    <section className='recipe-container'>
      {userDisplay}
    </section>
  )
}

export default Recipes;

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  viewRecipe: PropTypes.func.isRequired,
  filteredRecipes: PropTypes.array.isRequired,
  userInput: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}