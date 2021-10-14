import React from 'react';
import PropTypes from 'prop-types';
class StudentsCards extends React.Component {
  render() {
    const { students } = this.props;

    return (
      <div className="students-cards">
        {students.map(({ name, gender, house, image }, index) => (
          <div className="student-card" key={index}>
            <img src={ image } alt={ name } />
            <p>{ name }</p>
            <p>{ gender }</p>
            <p>{ house }</p>
          </div>
        ))}
      </div>
    );
  }
}

StudentsCards.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object),
};

export default StudentsCards;
