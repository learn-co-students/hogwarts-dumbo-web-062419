import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogBrowser from './HogBrowser';

class App extends Component {
  state = {
    allHogs: [],
    onlyGreasedHogs: false,
    sortHogsByName: false,
    sortHogsByWeight: false
  }

  componentDidMount() {
    this.setState({ allHogs: hogs })
  }

  filterByGrease = () => {
    this.setState({ onlyGreasedHogs: !this.state.onlyGreasedHogs })
  }

  sortHogsByName = () => {
    this.setState({ sortHogsByName: !this.state.sortHogsByName })
  }

  sortHogsByWeight = () => {
    this.setState({ sortHogsByWeight: !this.state.sortHogsByWeight })
  }

  render() {

    // console.log(this.state)
    let filteredHogs = [...this.state.allHogs]
    console.log("Filtered hogs: ", filteredHogs);

    if(this.state.onlyGreasedHogs) {
      filteredHogs = filteredHogs.filter(hog => {
        return hog.greased === true;
      })
    }

    if(this.state.sortHogsByName){
      filteredHogs = filteredHogs.sort((hog1, hog2) => {
        return hog1.name.localeCompare(hog2.name);
      })
    }

    if(this.state.sortHogsByWeight){
      filteredHogs = filteredHogs.sort((hog1, hog2) => {
        return hog2.weight - hog1.weight;
      })
    }

    return (
      <div className="App">
          < Nav
            filterByGrease={this.filterByGrease}
            sortHogsByName={this.sortHogsByName}
            sortHogsByWeight={this.sortHogsByWeight}
          />
          <HogBrowser hogs={filteredHogs}/>
      </div>
    )
  }
}

export default App;
