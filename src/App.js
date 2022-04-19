import './App.css';
import { Component } from 'react';
import apiCalls from './apiCalls';
import Header from './components/Header/Header';
import CharacterList from './components/CharacterList/CharacterList';

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
        <Header />
        <main>
          <section className='form-section'>
            
          </section>
          <section className='character-list-section'>
            <CharacterList 
              characters={this.state.characters}
            />
          </section>
        </main>
      </div>
    )
  }
}

export default App;
