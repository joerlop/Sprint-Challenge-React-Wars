import React from 'react';
import './StarWars.scss';

function StarshipElement(props) {
    return (
      <ul className="list-element">
        <li>{props.starshipProp}</li>
      </ul>      
    );
}

export default StarshipElement;
