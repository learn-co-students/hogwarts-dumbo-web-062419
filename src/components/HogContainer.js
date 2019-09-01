import React, { Component } from 'react';
import Hogs from './Hogs';

export default class HogContainer extends Component {

  mapHogs = () => (
  this.props.allHogs.map(hogObj => <Hogs key={hogObj.name} hog ={hogObj}/> )
)

  render() {
// console.log(this.props.hogs);
    return (
      <div className = 'ui grid container'>
      {this.mapHogs()}
      </div>
    )
  }
}
