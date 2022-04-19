import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    )
  }
}

export default App;
