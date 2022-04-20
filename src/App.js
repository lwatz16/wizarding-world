import './App.css';
import { Component } from 'react';
import apiCalls from './apiCalls';
import Header from './components/Header/Header';
import CharacterList from './components/CharacterList/CharacterList';
import Form from './components/Form/Form';

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
        // console.log(data)
        this.setState({ characters: data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  searchName = (inputCharacter) => {
    const filteredCharacters = this.state.characters.filter(character => {
      return character.name.toLowerCase().includes(inputCharacter.name.toLowerCase()) 
    })
    this.setState({ characters: filteredCharacters })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section className='form-section'>
            <Form searchName={this.searchName}/>
          </section>
          <section className='character-list-section'>
            {!this.state.characters.length && <h2>No characters found!</h2>}
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
