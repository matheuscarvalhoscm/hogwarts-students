import React from 'react';
import PropTypes from 'prop-types';
import StudentsCards from './StudentsCards';

class StudentsList extends React.Component {
  render() {
    const { students } = this.props;
    return (
      <StudentsCards students={ students } />
    ); 
  }
}

StudentsList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object),
}

export default StudentsList;
