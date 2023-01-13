import { Component } from 'react';
import Recipes from '../RecipeContainer/RecipeContainer';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import NavBar from '../NavBar/NavBar'
import { getRecipes } from '../APIcalls/APIcalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      singleRecipe: {},
      error: ''
    }
  }

  componentDidMount() {
    getRecipes()
      .then((data) => {
        this.setState({ recipes: data.recipes})
      })
      .catch((error) => {
        this.setState({ error: 'Oops, something went wrong. Please try again later.' })
      })
  }

  viewRecipe = (id) => {
    const singleRecipe = this.state.recipes.filter(recipe => {
      return id === recipe.id
    })
    this.setState({ singleRecipe: singleRecipe})
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <main className='main'>
          <Recipes recipes={this.state.recipes} viewRecipe={this.viewRecipe}/>
          <RecipeDetails singleRecipe={this.state.singleRecipe}/>
        </main>
      </div>
      
    )
  }
}

export default App;
