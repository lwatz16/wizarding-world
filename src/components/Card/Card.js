import React from 'react';
import './Card.css'

const Card = ({ name }) => {
  return(
    <div className='card'>
      {/* <h2>{name}</h2> */}
      <button 
        className='card-btn'
        name={name}
        onClick={(e)=> console.log('clicked>>>', e.target.name)}
      >{name}
      </button>
    </div>
  )
}

export default Card;