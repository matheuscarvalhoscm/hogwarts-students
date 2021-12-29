import React from 'react';
import './App.css';
import Title from './components/Title';
import HouseButtons from './components/HouseButtons';
import StudentsList from './components/StudentsList';
import data from './data';
import AppContext from './context/AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'Todos',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    this.setState({
      filter: target.name,
    });
  }

  render() {
    const contextValue = {
      students: data,
      filter: this.state.filter,
      filterHouse: this.handleClick,
    };

    return (
      <div className="App">
        <AppContext.Provider value={ contextValue }>
          <Title />
          <HouseButtons />
          <StudentsList />
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
