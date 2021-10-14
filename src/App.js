import React from 'react';
import './App.css';
import Title from './components/Title';
import HouseButtons from './components/HouseButtons';
import StudentsList from './components/StudentsList';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title />
        <HouseButtons />
        <StudentsList students={ data } />
      </div>
    );
  }
}

export default App;
