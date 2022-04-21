import React from 'react';
import './Card.css'

const Card = ({ name }) => {
  return(
      <button 
        className='card-btn'
        name={name}
        onClick={(e)=> console.log('clicked>>>', e.target.name)}
      >{name}
      </button>
  )
}

export default Card;