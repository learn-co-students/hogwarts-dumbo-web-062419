import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from "./HogContainer";


class App extends Component {

  state = {
    allHogs: hogs,
    onlyGreased: false
  };


  filterByGrease = () => {
    this.setState({ onlyGreased: !this.state.onlyGreased });
  };

  render() {
    let filteredHogs = [...this.state.allHogs];
    console.log('greased: ', this.state.onlyGreased)
    if (this.state.onlyGreased) {
      filteredHogs = filteredHogs.filter(hog => {
        return hog.greased === true;
      });
    }
    console.log(filteredHogs)


    return (
      <div className="App">
          < Nav
          filterByGrease={this.filterByGrease}
          />
          < HogContainer allHogs={filteredHogs} />
      </div>
    )
  }
}

export default App;
