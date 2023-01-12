import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [

      ]
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Burger of the Day</h1>
      </div>
    )
  }
}

export default App;
