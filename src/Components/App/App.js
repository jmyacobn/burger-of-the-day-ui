import { Component } from 'react';
import Recipes from '../RecipeContainer/RecipeContainer';
import NavBar from '../NavBar/NavBar'
import { importRecipes } from '../APIcalls/APIcalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    importRecipes()
      .then((data) => {
        this.setState({ recipes: data.recipes})
      })
      .catch((error) => {
        this.setState({ error: 'Oops, something went wrong. Please try again later.' })
      })
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <main className='main'>
          <Recipes recipes={this.state.recipes} />
        </main>
      </div>
      
    )
  }
}

export default App;
