import { Component } from 'react';
import Recipes from '../RecipeContainer/RecipeContainer';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar';
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
    getRecipes()
      .then((data) => {
        this.setState({ recipes: data.recipes})
      })
      .catch((error) => {
        this.setState({ error: 'Oops, something went wrong. Please try again later.' })
      })
  }

  viewRecipe = (id) => {
    const singleRecipe = this.state.recipes.find(recipe => {
      return id === recipe.id
    })
    this.setState({ singleRecipe: singleRecipe})
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value})
    this.filterRecipes()
  }

  render() {
    return (
      <div className='app'>
        <header>
          <NavBar />
        </header>
        <main className='main'>
          <Switch>
            <Route exact path='/'>
              <section className='all-recipes'>
                <h1 className='title'>Burger of the Day</h1>
                <SearchBar handleChange={this.handleChange}/>
                <Recipes recipes={this.state.recipes} viewRecipe={this.viewRecipe}/>
              </section>
            </Route>
            <Route exact path='/recipe/:id' render={( {match} ) => {
              return <RecipeDetails singleRecipe={this.state.singleRecipe} id={match.params.id}/>
            }}/>
            <Route exact path='/recipe/:id'>
              <RecipeDetails singleRecipe={this.state.singleRecipe}/>
            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
