import './RecipeDetails.css';

const RecipeDetails = ( { singleRecipe } ) => {
  console.log(singleRecipe)
  const eachIngredient = singleRecipe.ingredients.map(ingredient => {
    console.log(ingredient)
    return ingredient
  })
  const ingredientList = eachIngredient.join(", ")
  return (
    <div className='single-recipe'>
      <h1>{singleRecipe.name}</h1>
      <p>{singleRecipe.description}</p>
      <p>Serving Size: Makes {singleRecipe.servings}.</p>
      <div className='recipe-instructions'>
        <div className='ingredients'>
          <p>Ingredients: <br></br> <br></br> {ingredientList}</p>
        </div>
        <div className='directions'>
          <p>Directions: <br></br> <br></br> asdfasdfasdfasdfasdfasdfa.asdfasdfa</p>
        </div>
        
        {/* <p>Directions: {singleRecipe.instructions}</p> */}
      </div>
    </div>
  )
}

export default RecipeDetails;