import React from 'react';
import './StarWars.scss';

import FilmElement from "./FilmElement";
import VehicleElement from "./VehicleElement";
import StarshipElement from "./StarshipElement";
import SpeciesElement from "./SpeciesElement";

function Character(props) {
    return (
      <div className="character">
        <h2>{props.characterProp.name}</h2>
        <p>Birth year: {props.characterProp.birth_year}</p>
        <p>Date created: {props.characterProp.created}</p>
        <p>Date edited: {props.characterProp.edited}</p>
        <p>Eye color: {props.characterProp.eye_color}</p>
        <p>Films:
            {props.characterProp.films.map(film => {
                return  <FilmElement filmProp={film}/>
            })}
        </p>  
        <p>Gender: {props.characterProp.gender}</p>
        <p>Hair color: {props.characterProp.hair_color}</p>
        <p>Height: {props.characterProp.height}</p>
        <p>Homeworld: {props.characterProp.homeworld}</p>
        <p>Mass: {props.characterProp.mass}</p>
        <p>Skin color: {props.characterProp.skin_color}</p>
        <p>Species:
            {props.characterProp.species.map(species => {
                return  <SpeciesElement speciesProp={species}/>
            })}
        </p>
        <p>Starships:
            {props.characterProp.starships.map(starship => {
                return  <StarshipElement starshipProp={starship}/>
            })}
        </p>
        <p>URL: {props.characterProp.url}</p>
        <p>Vehicles:
            {props.characterProp.vehicles.map(vehicle => {
                return  <VehicleElement vehicleProp={vehicle}/>
            })}
        </p>
      </div>      
    );
}

export default Character;
