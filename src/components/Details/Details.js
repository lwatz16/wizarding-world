import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css';
import apiCalls from '../../apiCalls';

class Details extends Component {
  constructor() {
    super()
    this.state = {
      imageURL: [],
      error: ''
    }
  }

  componentDidMount() {
    apiCalls.getGiphy(this.props.character.name)
      .then(data => {
        this.setState({ imageURL: data.data[0].images.original.url })
      })
      .catch(error => {
        this.setState({ error: `Oops... an error occured getting this image. ${error} `})
      })
  }

  render() {
    const {character} = this.props
    return(
      <>
        {character.name === undefined ? (
          <Redirect to='/' />
        ) : (
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
                  {this.state.error ? <p className='error-details'>{this.state.error}</p> : <img className='details-img' src={this.state.imageURL} alt={character.name}></img>}
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
        )}
      </>
    )

  }
}

export default Details;