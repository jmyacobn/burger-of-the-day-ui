import './RecipeDetails.css';

const RecipeDetails = ( {singleRecipe} ) => {
  return (
    <div>
      {singleRecipe.name}
    </div>
  )
}

export default RecipeDetails;