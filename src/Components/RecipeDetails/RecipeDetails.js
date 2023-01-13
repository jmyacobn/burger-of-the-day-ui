import './RecipeDetails.css';

const RecipeDetails = ( { singleRecipe } ) => {
  let counter = 0
  const eachIngredient = singleRecipe.ingredients.map(ingredient => {
    counter ++
    return <li key={counter} >{ingredient}</li>
  })

  let recipeSteps =[]
  const eachInstruction = singleRecipe.instructions.forEach(instruction => {
    return recipeSteps.push(instruction)
  })

  const eachStep = recipeSteps.map(step => {
    counter ++ 
    return <li key={counter} className='step'>{step.instruction}</li>
  })
  
  return (
    <article className='single-recipe'>
      <h1>{singleRecipe.name}</h1>
      <p className='recipe-details'>{singleRecipe.description}</p>
      <p className='recipe-details'>Serving Size: Makes {singleRecipe.servings}.</p>
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