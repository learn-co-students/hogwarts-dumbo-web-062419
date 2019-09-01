import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {
  state = {
    allHogs: hogs,
    filterOn: false,
    sortByName: false,
    sortByWeight: false
  }

  toggleFilter = () => {
    this.setState({
      filterOn: !this.state.filterOn
    })
  }

  toggleName = () => {
    this.setState({
      sortByName: !this.state.sortByName, sortByWeight: false
    })
  }

  toggleWeight = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight, sortByName: false
    })
  }


  render() {

    let filteredHogs = [...this.state.allHogs];
    if( this.state.filterOn) {
      filteredHogs = filteredHogs.filter(hog => {
        return hog.greased === true;
      })
    }

    if (this.state.sortByName) {
      filteredHogs = filteredHogs.sort((hogA, hogB) => {
        return hogA.name.localeCompare(hogB.name)
      })
    }

    if(this.state.sortByWeight) {
      filteredHogs = filteredHogs.sort((hogA, hogB) => {
        return hogB.weight - hogA.weight
      })
    }
    return (
      <div className="App">

          < Nav toggleFilter={this.toggleFilter}
          toggleName = {this.toggleName}
          toggleWeight = {this.toggleWeight}/>
        <HogContainer allHogs = {filteredHogs}/>
      </div>
    )
  }
}

export default App;
