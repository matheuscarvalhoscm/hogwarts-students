import React from 'react';
import Gryffindor from '../images/Gryffindor.png';
import Slytherin from '../images/Slytherin.png';
import Hufflepuff from '../images/Hufflepuff.png';
import Ravenclaw from '../images/Ravenclaw.png';
import AppContext from '../context/AppContext';

function StudentsCards() {

	const getCrest = (house) => {
		if (house === 'Gryffindor') return Gryffindor;
		if (house === 'Slytherin') return Slytherin; 
		if (house === 'Hufflepuff') return Hufflepuff;
		if (house === 'Ravenclaw') return Ravenclaw;
	};

	return (
    <AppContext.Consumer>
      {(({ students, filter }) => (
		    <div className="students-cards">
			    {students.filter(({ house }) => house === filter || filter === 'Todos')
            .map(({ name, gender, house, image }, index) => 
				      <div className="student-card" key={ index }>
					      <img 
						      src={ image !== '' ? image : getCrest(house) }
						      alt={ name }
					      />
					      <p>{ name }</p>
					      <p>{ gender }</p>
					      <p>{ house }</p>
				      </div>
			      )}
		    </div>
      ))}
    </AppContext.Consumer>
	);
}

export default StudentsCards;
