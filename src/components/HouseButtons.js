import React from 'react';
import AppContext from "../context/AppContext";

function HouseButtons() {
  const HogwartsHouses = [
    'Todos',
    'Gryffindor',
    'Slytherin',
    'Hufflepuff',
    'Ravenclaw',
  ];

  return (
    <AppContext.Consumer>
      {({ filterHouse }) => (
        <div>
          {HogwartsHouses.map((house, index) => (
            <button
              key={ index }
              type="button"
              name={ house }
              onClick={ filterHouse }
            >
              { house }
            </button>
          ))}
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default HouseButtons;
