import './RecipeDetails.css';

const RecipeDetails = ( { singleRecipe } ) => {
  const eachIngredient = singleRecipe.ingredients.map(ingredient => {
    return <li>{ingredient}</li>
  })

  let recipeSteps =[]
  const eachInstruction = singleRecipe.instructions.forEach(instruction => {
    return recipeSteps.push(instruction)
  })

  const eachStep = recipeSteps.map(step => {
      return <li>{step.instruction}</li>
  })
  
  return (
    <article className='single-recipe'>
      <h1>{singleRecipe.name}</h1>
      <p>{singleRecipe.description}</p>
      <p>Serving Size: Makes {singleRecipe.servings}.</p>
      <div className='recipe-instructions'>
        <div className='ingredients'>
          <ul>Ingredients: {eachIngredient}</ul>
        </div>
        <div className='instructions'>
          <ol type='1'>Instructions: {eachStep}</ol>
        </div>
      </div>
    </article>
  )
}

export default RecipeDetails;