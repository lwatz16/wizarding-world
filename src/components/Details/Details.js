import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css';
import apiCalls from '../../apiCalls';
// import NoMatchPath from '../NoMatchPath/NoMatchPath';

class Details extends Component {
  constructor() {
    super()
    this.state = {
      imageURL: []
    }
  }

  componentDidMount() {
    apiCalls.getGiphy('Harry Potter')
      .then(data => {
        console.log(data.data[0].images.original.url)
        this.setState({ imageURL: data.data[0].images.original.url })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const {character} = this.props
    return(
      <>
        {/* {!character.name && <Redirect to='/' />} */}
        {character.name && 
          <main className='details-page'>
            <header className='.details-header'>
              <h1 className='.details-heading'>Wizarding World</h1>
            </header>
    
            <Link to={'/'}>
              <button className='.back-btn'>Back</button>
            </Link>
    
            <section className='details-section'>
              <h2 className='details-name'>{character.name}</h2>
              <div className='img-container'>
                <img className='details-img' src={this.state.imageURL} alt={character.name}></img>
              </div>
            
              <div className='details-container'>
                {character.house && <p>House: {character.house}</p>}
                {character.ancestry && <p>Ancestry: {character.ancestry}</p>}
                {character.species && <p>Species: {character.species}</p>}
                {character.patronus && <p>Patronus: {character.patronus}</p>}
                <p>Wizard: {character.wizard ? 'true' : 'false'}</p>
                <p>Staff: {character.hogwartsStaff ? 'true' : 'false'}</p>
                <p>Student: {character.hogwartsStudent ? 'true' : 'false'}</p>
                <p>Actor: {character.actor}</p>
              </div>
              
              {character.wand.wood && <div className='wand-details'>
                <h3>Wand</h3>
                {character.wand.wood && <p>Wood: {character.wand.wood}</p>}
                {character.wand.core && <p>Core: {character.wand.core}</p>}
                {character.wand.length && <p>Length: {character.wand.length}</p>}
              </div>
              }
            </section>
          </main>
        }
      </>
    )

  }
}

export default Details;