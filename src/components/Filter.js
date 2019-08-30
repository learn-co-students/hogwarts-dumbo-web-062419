import React from 'react';

export default class Filter extends React.Component {

  render(){
    return(
      <div>
      <span>
      <button onClick={this.props.updateFilter}>Filter Greased Hogs</button>
      {'  '}
      <button onClick={this.props.nameSort}>Sort by Name</button>
      {'  '}
      <button onClick={this.props.weightSort}>Sort by Weight</button>
      {'  '}
      <button onClick={this.props.hideHogs}>Hide the Hogs!</button>
      </span>
      <br></br><br></br><br></br>
      </div>
    )
  }
}
