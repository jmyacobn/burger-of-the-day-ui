import { Component } from 'react';
import Recipes from '../RecipeContainer/RecipeContainer';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar';
import error from '../../../src/assets/error.png';
import { getRecipes } from '../APIcalls/APIcalls';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      singleRecipe: {},
      filteredRecipes: [],
      userInput: '',
      loading: false,
      error: ''
    }
  }

  componentDidMount() {
    this.setState( {loading: true} )
    getRecipes()
      .then((data) => {
        this.setState({ recipes: data.recipes, loading: false})
      })
      .catch((error) => {
        this.setState({ error: 'Oops, something went wrong. Please try again later.' })
      })
  }

  viewRecipe = (id) => {
    const singleRecipe = this.state.recipes.find(recipe => {
      return id === recipe.id
    })
    this.setState({ singleRecipe: singleRecipe, filteredRecipes: this.state.recipes })
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value})
    this.filterRecipes(event)
  }

  filterRecipes = (event) => {
    const filteredByIngredients = this.state.recipes.filter(recipe => {
      let value = event.target.value.toLowerCase()
      let ingredient = recipe.ingredients.join(", ").toLowerCase()
      if(ingredient.includes(value)) {
        return recipe
      }
    })
    this.setState({ filteredRecipes: filteredByIngredients })
  }

  render() {
    return (
      <div className='app'>
        <header>
          <NavBar />
        </header>
        <main className='main'>
          {this.state.error ? (
          <div className='error-container'>
            <h2 className='error'>{this.state.error}</h2>
            <img className='error-img' src={error} alt='Louise with scared look on her face.'/>  
          </div>) : 
          <Switch>
            <Route exact path='/'>
              <section className='all-recipes'>
                <h1 className='title'>Burger of the Day</h1>
                <SearchBar handleChange={this.handleChange}/>
                <Recipes recipes={this.state.recipes} viewRecipe={this.viewRecipe} filteredRecipes={this.state.filteredRecipes} userInput={this.state.userInput} loading={this.state.loading}/>
              </section>
            </Route>
            <Route exact path='/recipe/:id' render={( {match} ) => {
              return <RecipeDetails singleRecipe={this.state.singleRecipe} id={match.params.id}/>
            }}/>
            <Route exact path='/recipe/:id'>
              <RecipeDetails singleRecipe={this.state.singleRecipe}/>
            </Route>
          </Switch>
          }
        </main>
      </div>
    )
  }
}

export default App;
