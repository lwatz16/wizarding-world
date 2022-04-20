import './App.css';
import { Component } from 'react';
import apiCalls from './apiCalls';
import Header from './components/Header/Header';
import CharacterList from './components/CharacterList/CharacterList';
import Form from './components/Form/Form';
import FilterDropDown from './components/FilterDropDown/FilterDropDown';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      filteredCharacters: [],
      isFiltered: false,
      isLoading: true,
      error: ''
    }
  }

  componentDidMount() {
    apiCalls.getCharacters()
      .then(data => {
        this.setState({ characters: data, isLoading: false })
      })
      .catch(error => {
        console.log(error)
        this.setState({ isLoading: false, error: 'Oops... Something went wrong. Our team is working on fixing the issue' })
      })
  }

  searchName = (inputCharacter) => {
    const filteredCharacters = this.state.characters.filter(character => {
      return character.name.toLowerCase().includes(inputCharacter.name.toLowerCase()) 
    })
    this.setState({ filteredCharacters: filteredCharacters, isFiltered: true })
  }

  filterByHouse = (filterBy) => {
    const filteredBy = this.state.characters.filter(character => {
      return character.house === filterBy
    })
    console.log(filteredBy)
  }

  clearFilter = () => {
    this.setState({ isFiltered: false, filteredCharacters: [] })
  }

  render() {
    return (
      <div className="App">
        {this.state.error && <p>{ this.state.error }</p>}
        {!this.state.error && 
          <>
            <Header />
            <main>
              <section className='form-section'>
                <Form searchName={this.searchName} clearFilter={this.clearFilter}/>
              </section>
              <section className='filter-dropdown-section'>
              <FilterDropDown filterByHouse={this.filterByHouse}/>
              </section>
              {this.state.isLoading && <p>Loading ...</p>}
              {!this.state.isLoading && 
                <section className='character-list-section'>
                  {!this.state.characters.length && <h2>No characters found!</h2>}
                  {this.state.isFiltered && 
                    <CharacterList 
                      characters={this.state.filteredCharacters}
                    />
                  }
                </section>
              }
            </main>
          </>
        }
      </div>
    )
  }
}

export default App;
