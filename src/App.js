import './App.css';
import { Component } from 'react';
import apiCalls from './apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    apiCalls.getCharacters()
      .then(data => {
        console.log(data)
        this.setState({ characters: data })
      })
      .catch(error => {
        console.log(error)
      })
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
