import React, { Component } from 'react'

export default class Hog extends Component {

  state = {
    showInfo: false
  }

  getImg = () => {
    const name = this.props.hogData.name
      .split(" ")
      .join("_")
      .toLowerCase();
    const img = require(`../hog-imgs/${name}.jpg`)
    // console.log(name);
    return img
  }

  showHogInfo = () => {
    // console.log("Show Info");
    // Adds a key to state below
    // this.setState({myName: "Lawson"})
    this.setState({showInfo: !this.state.showInfo})
    // console.log(this.state.showInfo);
  }

  render() {
    // console.log("hog hit");
    // console.log(this.props.hogData);
    // console.log(this.getImg());
    // console.log(this.state.showInfo);
    // console.log(this.state);
    const hogName = this.props.hogData.name;

    return (
      <div className="ui eight wide column">
        <h3>
          Name: {hogName}
        </h3>
        {/*<img src={require(`../hog-imgs/${this.props.hogData.name.split(" ").join("_").toLowerCase()}.jpg`)} />*/}
        <img src={this.getImg()} alt="" onClick={this.showHogInfo} />
        {this.state.showInfo ?
          (<div>
            <div>Specialty: {this.props.hogData.specialty}</div>
            <div>Greased: {this.props.hogData.greased ? "yes" : "no" }</div>
            <div>Weight: {this.props.hogData.weight}</div>
            <div>Highest Medal: {this.props.hogData["highest medal achieved"]}</div>

          </div>)
          :
          null

        }
      </div>
    )
  }

}
