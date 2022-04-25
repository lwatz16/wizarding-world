import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({ name, getCharacterDetails }) => {
  const nameURL = () => {
    const characterURL = name.toLowerCase().split(' ').join('-')
    return characterURL
  }

  return(
    <Link to={`/character/${nameURL()}`} className='card-link'>
      <button 
        className='card-btn'
        name={name}
        onClick={(e)=> { getCharacterDetails(e.target.name) }}
      >{name}
      </button>
    </Link>
  )
}

export default Card;