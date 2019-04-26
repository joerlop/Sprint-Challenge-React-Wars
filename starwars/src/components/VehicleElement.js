import React from 'react';
import './StarWars.scss';

function VehicleElement(props) {
    return (
      <ul className="list-element">
        <li>{props.vehicleProp}</li>
      </ul>      
    );
}

export default VehicleElement;
