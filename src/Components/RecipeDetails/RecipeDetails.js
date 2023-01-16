import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    <section>
      <Link to='/'>
        <button id='go-back'>Go Back</button>
      </Link>
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
    </section>
  )
}

export default RecipeDetails;

RecipeDetails.propTypes = {
  singleRecipe: PropTypes.object.isRequired
}