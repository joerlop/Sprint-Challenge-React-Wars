import React from 'react';
import './StarWars.scss';

import Character from "./Character";

function CharacterList(props) {
  return (
    props.list.map(character => {
      return <Character characterProp={character} />
    })
  );
}

export default CharacterList;
