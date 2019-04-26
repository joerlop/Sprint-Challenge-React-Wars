import React from 'react';
import './StarWars.scss';

function FilmElement(props) {
    return (
      <ul className="list-element">
        <li>{props.filmProp}</li>
      </ul>      
    );
}

export default FilmElement;
