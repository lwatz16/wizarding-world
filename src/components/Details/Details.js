import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css';
import NoMatchPath from '../NoMatchPath/NoMatchPath';

const Details = ({ character }) => {
  return(
    <>
      {/* {!character.name && <Redirect to='/' />} */}
      {!character.name && <NoMatchPath />}
      {character.name && 
        <main className='details-page'>
          <header className='.details-header'>
            <h1 className='.details-heading'>Wizarding World</h1>
          </header>

          <Link to={'/'}>
            <button className='.back-btn'>Back</button>
          </Link>

          <section className='details-section'>
            {character.image && <div className='img-container'>
              <img className='details-img' src={character.image} alt={character.name}></img>
            </div>
            }
            <h2 className='details-name'>{character.name}</h2>
            <div className='details-container'>
              <p>House: {character.house}</p>
              <p>Ancestry: {character.ancestry}</p>
              <p>Species: {character.species}</p>
              <p>Patronus: {character.patronus}</p>
              <p>Wizard: {character.wizard ? 'true' : 'false'}</p>
              <p>Staff: {character.hogwartsStaff ? 'true' : 'false'}</p>
              <p>Student: {character.hogwartsStudent ? 'true' : 'false'}</p>
              <p>Actor: {character.actor}</p>
            </div>
            
            {character.wand.wood && <div className='wand-details'>
              <h3>Wand</h3>
              <p>Wood: {character.wand.wood}</p>
              <p>Core: {character.wand.core}</p>
              <p>Length: {character.wand.length}</p>
            </div>
            }
          </section>
        </main>
      }
    </>
  )
}

export default Details;