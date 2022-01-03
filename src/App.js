import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// by using classes we have access to State, functions do not.
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    // take response and convert to json
    .then(response => response.json())
    // take users and set to Monsters array
    .then(users => this.setState({ monsters: users}));
  }

  handleChange= e => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      // JSX syntax
      <div className="App">
      <h1>Monsters list</h1>
        <SearchBox
         placeholder = 'Search for the Monsters'
         handleChange = { this.handleChange }
        />
        <CardList monsters={filteredMonsters} />
    </div>
    );
  }
}

export default App;
