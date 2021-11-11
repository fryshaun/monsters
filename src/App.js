import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

// by using classes we have access to State, functions do not.
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    // take response and convert to json
    .then(response => response.json())
    // take users and set to Monsters array
    .then(users => this.setState({ monsters: users}));
  }


  render() {
    return (
      // JSX syntax
      <div className="App">
        <CardList monsters={this.state.monsters} />
    </div>
    );
  }
}

export default App;
