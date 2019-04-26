import React from 'react';
import './StarWars.scss';

function SpeciesElement(props) {
    return (
      <ul className="list-element">
        <li>{props.speciesProp}</li>
      </ul>      
    );
}

export default SpeciesElement;
