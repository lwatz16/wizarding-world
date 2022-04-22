import './App.css';
import { Component } from 'react';
import apiCalls from './apiCalls';
import Header from './components/Header/Header';
import CharacterList from './components/CharacterList/CharacterList';
import Form from './components/Form/Form';
import FilterDropDown from './components/FilterDropDown/FilterDropDown';
import { Route, Switch } from 'react-router-dom';
import Details from './components/Details/Details';
import NoMatchPath from './components/NoMatchPath/NoMatchPath';
import FilterButtons from './components/FilterButtons/FilterButtons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      filteredCharacters: [],
      isFiltered: false,
      isLoading: true,
      error: '',
      selectedCharacter: {},
      isFilterButton: false,
      selectedFilter: ''
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

  getCharacterDetails = (name) => {
    const characterDetails = this.state.characters.find(character => character.name === name)
    console.log(characterDetails)
    this.setState({ selectedCharacter: characterDetails })
  }

  toggleFilter = (filterType) => {
    this.setState({ isFilterButton: true, selectedFilter: filterType })

  }

  render() {
    return (
      <div className="app">
        {/* {this.state.error && <p>{ this.state.error }</p>}
        {!this.state.error && }  */}
        <Switch>
          <Route 
            exact path='/' 
            render={() => 
            <>
              <Header />
              <main className='main'>
                <section className='filter-section'>

                  {
                    this.state.selectedFilter === 'name' ? (
                      <div className='show-filter'>
                        <FilterButtons toggleFilter={this.toggleFilter} />
                        <Form searchName={this.searchName} clearFilter={this.clearFilter} />
                      </div>
                    ) : (
                          this.state.selectedFilter === 'house' || this.state.selectedFilter === 'ancestry' || this.state.selectedFilter === 'hogwarts' ? (
                        <div className='show-filter'>
                          <FilterButtons toggleFilter={this.toggleFilter} />
                          <FilterDropDown searchFilterBy={this.searchFilterBy} />
                        </div>
                    ) : (
                      <FilterButtons toggleFilter={this.toggleFilter} />
                    )
                    )}
                  
                </section>

                {/* {this.state.isLoading && <p>Loading ...</p>} */}
                {!this.state.isLoading && 
                  <section className='character-list-section'>
                    {!this.state.characters.length && <h2>No characters found!</h2>}
                    {this.state.isFiltered && 
                      <CharacterList 
                        characters={this.state.filteredCharacters}
                        getCharacterDetails={this.getCharacterDetails}
                      />
                    }
                  </section>
                }
              </main>
            </>
            } 
          />

          <Route exact path='/character/:name' render={({ match }) => {
            console.log('MATCH', match)
            return(
              <Details
                character={this.state.selectedCharacter}
                name={match.params.name} 
              />
             
            )
          }}
          />

          <Route component={NoMatchPath} />
        </Switch>
      </div>
    )
  }
}

export default App;
