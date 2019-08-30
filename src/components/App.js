import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import hogs from '../porkers_data';
import HogBrowser from './HogBrowser';

class App extends Component {

  state={
    filterGreased: false,
    pigs: hogs,
    sortByName: false,
    sortByWeight: false
  }

  updateFilter = () => {
    if (!this.state.filterGreased){
      let greasedHogs = hogs.filter(pig => pig.greased)
      this.setState({pigs: greasedHogs, filterGreased: !this.state.filterGreased})
    } else {
      this.setState({pigs: hogs, filterGreased: !this.state.filterGreased})
    }
  }

  nameSort = () => {
    if (!this.state.sortByName){
      let nameHogs = [...hogs].sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({pigs: nameHogs, sortByName: !this.state.sortByName})
    } else {
      this.setState({pigs: hogs, sortByName: !this.state.sortByName})
    }
  }

  weightSort = () => {
    if (!this.state.sortByWeight){
      let weightHogs = [...hogs].sort((a, b) => (a.weight > b.weight) ? 1 : -1)
      this.setState({pigs: weightHogs, sortByWeight: !this.state.sortByWeight})
    } else {
      this.setState({pigs: hogs, sortByWeight: !this.state.sortByWeight})
    }
  }

  hideHogs = () => {
    // if (this.state.pigs !== []){
    //   this.setState({pigs: []})
    // } else {
    //   console.log('in else ',this.state.pigs);
    //   this.setState({pigs: hogs})
    // }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter updateFilter={this.updateFilter} nameSort={this.nameSort} weightSort={this.weightSort} hideHogs={this.hideHogs} />
          <HogBrowser hogs={this.state.pigs}/>

      </div>
    )
  }
}

export default App;
