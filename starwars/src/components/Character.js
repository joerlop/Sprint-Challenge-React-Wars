import React from 'react';
import './StarWars.scss';

function Character(props) {
    return (
      <div className="character">
        {props.characterProp.name}
      </div>      
    );
}

export default Character;
