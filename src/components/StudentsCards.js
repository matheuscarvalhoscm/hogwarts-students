import React from 'react';
import PropTypes from 'prop-types';
import Gryffindor from '../images/Gryffindor.png';
import Slytherin from '../images/Slytherin.png';
import Hufflepuff from '../images/Hufflepuff.png';
import Ravenclaw from '../images/Ravenclaw.png';

class StudentsCards extends React.Component {
  render() {
    const { students } = this.props;

		const getCrest = (house) => {
			if (house === 'Gryffindor') return Gryffindor;
			if (house === 'Slytherin') return Slytherin; 
			if (house === 'Hufflepuff') return Hufflepuff;
			if (house === 'Ravenclaw') return Ravenclaw;
		};
		
		return (
			<div className="students-cards">
				{students.map(({ name, gender, house, image }, index) => 
					<div className="student-card" key={ index }>
						<img 
						  src={ image ? image : getCrest(house) }
						  alt={ name }
						/>
						<p>{ name }</p>
						<p>{ gender }</p>
						<p>{ house }</p>
					</div>
				)}
			</div>
		);
	}
}

StudentsCards.propTypes = {
	students: PropTypes.arrayOf(PropTypes.object),
}

export default StudentsCards;
