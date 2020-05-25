import React from 'react';

import Ship from './Ship/Ship'

const ships = (props) =>
    props.ships.map((ship, index) => {
        return<Ship
        name = {ship.name}
        manufacturer = {ship.manufacturer}
        costInCredits = {ship.cost_in_credits}
        key={index}
        click = {(event) => props.clicked(event,index)}
        />
  });

  export default ships;