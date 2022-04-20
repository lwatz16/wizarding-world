import React from 'react';
import './Card.css'

const Card = ({ name, image, house }) => {
  return(
    <div className='card'>
      {/* <img src={`${image}`} alt={`${name}`}></img> */}
      <h2>{name}</h2>
      {/* <h3>{house}</h3> */}
    </div>
  )
}

export default Card;