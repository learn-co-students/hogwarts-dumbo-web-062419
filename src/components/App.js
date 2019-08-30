import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigBrowser from './PigBrowser'

class App extends Component {

  state = {
    pigs: hogs,
    filtered: false
  }

  handleFilter = () =>{
    this.setState({
        filtered: !this.state.filtered
    })
  }

  alphabeticalHogs = () => {
    const alphabeticalPigs = this.state.pigs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      pigs: alphabeticalPigs
    })
  }

  weightedHogs = () => {
    const heavyPigs = this.state.pigs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    this.setState({
      pigs: heavyPigs
    })
  }

  render() {
    // console.log(hogs)
    return (
      <div className="App">
          < Nav handleFilter={this.handleFilter} alphabeticalHogs={this.alphabeticalHogs} weightedHogs={this.weightedHogs}/>
          < PigBrowser pigs={this.state.pigs} filtered={this.state.filtered}/>
      </div>
    )
  }
}

export default App;
