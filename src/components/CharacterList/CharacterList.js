import React from 'react';
import Card from '../Card/Card';

const CharacterList = ({ characters }) => {
  const characterCards = characters.map((character) => {
    return(
      <Card
        name={character.name}
        image={character.image}
        house={character.house}
        key={character.name}
      />
    )
  }) 

  return(
    <div>
      {characterCards}
    </div>
  )
}

export default CharacterList;