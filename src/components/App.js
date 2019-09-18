import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogtiles from './Hogtiles'

class App extends Component {

  state = {
    allHogs:[],
    onlyGreased: false,
    
  };

  componentDidMount(){

    this.setState({allHogs: hogs})
 
  }

  // componentDidUpdate(prevProps, prevState){
  //   debugger
  //   if (prevState.allHogs !== this.props.allHogs) {
  //     console.log("hi")
  //   }
  // }

  filterByGrease = () => {
    this.setState({ onlyGreased: !this.state.onlyGreased})
  }



  render() {
      let filteredHogs = [...this.state.allHogs]
      
      if (this.state.onlyGreased === true) {
        filteredHogs = filteredHogs.filter(hog => {
          return hog.greased 
        })
      }

    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          < Nav filterByGrease ={this.filterByGrease}/>
        </div>
        <div className="sixteen wide column centered">
          <Hogtiles allHogs={filteredHogs} />
        </div>

      </div>
    )
  }
}

export default App;
