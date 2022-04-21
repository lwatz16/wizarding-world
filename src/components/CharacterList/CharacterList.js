import React from 'react';
import Card from '../Card/Card';
import './CharacterList.css';

const CharacterList = ({ characters, getCharacterDetails }) => {
  const characterCards = characters.map((character, index) => {
    return(
      <Card
        name={character.name}
        key={index}
        getCharacterDetails={getCharacterDetails}
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