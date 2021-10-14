import React from 'react';

const HogwartsHouses = [
  'Todos',
  'Gryffindor',
  'Slytherin',
  'Hufflepuff',
  'Ravenclaw',
];

class HouseButtons extends React.Component {
  render() {
    return (
      <div>
        {HogwartsHouses.map((house, index) => (
          <button key={ index } type="button">
            { house }
          </button>
        ))}
      </div>
    );
  }
}

export default HouseButtons;
