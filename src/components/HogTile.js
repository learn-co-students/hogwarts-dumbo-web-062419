import React from 'react'

export default class HogTile extends React.Component {

  state = {
    showInfo: false,
  }

  handleClick = () => {
    this.state.showInfo ? this.setState({ showInfo: false }) : this.setState({ showInfo: true })
  }

  getImg = () => {
    const hogName = this.props.hog.name.split(" ").join("_").toLowerCase();
    const imgName = require(`../hog-imgs/${hogName}.jpg`);
    return imgName;
  }

  render() {
    return (
      <div onClick={this.handleClick}>
      <img src={this.getImg()} alt="" />
        <h1>{this.props.hog.name}</h1>
        {this.state.showInfo ? (
          <div>
            <div>Specialty: {this.props.hog.specialty}</div>
            <div>Greased: {this.props.hog.greased ? "Pig is Greasy" : "Not Enough Grease"}</div>
            <div>Weight: {this.props.hog.weight}</div>
            <div>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</div>
          </div>
        ) : null}
      </div>
    )
  }

}
