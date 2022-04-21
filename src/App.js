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

  searchFilterBy = (filterBy, filterMenu) => {
    if(filterBy !== '') {
      const filteredByResults = this.state.characters.filter(character => {
        if (filterMenu === 'ancestry') {
          return character.ancestry === filterBy
        } else if (filterMenu === 'house') {
          return character.house === filterBy
        } else if (filterMenu === 'hogwarts') {
          return character[filterBy] === true
        }
      })
      this.setState({ filteredCharacters: filteredByResults, isFiltered: true })
    }
  }

  clearFilter = () => {
    this.setState({ isFiltered: false, filteredCharacters: [] })
  }

  render() {
    return (
      <div 
        className="app"
        style={{
          backgroundImage: "url(/hogwarts-aditya-vyas-unsplash.jpg)",
          height: '100vh',
          marginTop: '-70px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {this.state.error && <p>{ this.state.error }</p>}
        {!this.state.error && 
          <>
            <Header />
            <main>
              <section className='form-section'>
                <Form searchName={this.searchName} clearFilter={this.clearFilter}/>
              </section>
              <section className='filter-dropdown-section'>
              <FilterDropDown searchFilterBy={this.searchFilterBy}/>
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
