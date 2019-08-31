import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTiles from './HogTiles';

class App extends Component {

  state = {
    hogArray: hogs,
    greaseFilter: false,
    sortByName: false,
    sortByWeight: false
  }

  toggleGreased = () => {
    this.setState({
      greaseFilter: !this.state.greaseFilter
    });
  }

  toggleNameSort = () => {
    this.setState({
      sortByName: !this.state.sortByName
    });
  }

  toggleWeightSort = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight
    });
  }

  filteredPigs = () => {

    let array = [];

    if(this.state.greaseFilter) {
      array = this.state.hogArray.filter(hog => hog.greased);
    } else {
      array = [...this.state.hogArray];
    }
    if(this.state.sortByName) {
      array = array.sort((a, b)=> a.name.localeCompare(b.name));
    } else {
      array = [...this.state.hogArray];
    }
    if(this.state.sortByWeight){
      array = array.sort((a, b)=> a.weight - b.weight);
    } else {
      array = [...this.state.hogArray];
    }
    return array;
  }
  
  render() {

    return (
      <div className="App">
        <div className="ui container">
          <Nav toggleGreased={this.toggleGreased} toggleName={this.toggleNameSort} toggleWeight={this.toggleWeightSort} />
          <HogTiles porks={this.filteredPigs()} />
        </div>
      </div>
    );
  }
}

export default App;