import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogTiles from './HogTiles';
import hogs from '../porkers_data';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <div className="ui container">
          <Nav />
          <HogTiles porks={hogs} />
        </div>
      </div>
    );
  }
}

export default App;