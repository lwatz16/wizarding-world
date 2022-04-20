import React from 'react';
import Card from '../Card/Card';
import './CharacterList.css';

const CharacterList = ({ characters }) => {
  const characterCards = characters.map((character, index) => {
    return(
      <Card
        name={character.name}
        image={character.image}
        house={character.house}
        key={index}
      />
    )
  }) 

  return(
    <div className='list-container'>
      {characterCards}
    </div>
  )
}

export default CharacterList;