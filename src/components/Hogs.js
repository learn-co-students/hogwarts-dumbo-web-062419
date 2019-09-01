import React from 'react'


export default class Hogs extends React.Component {
  state ={
    showInfo: false
  }

  hogImage = () => {
    const hogName = this.props.hog.name
    return hogName.toLowerCase().split(" ").join("_")
  }

  handleClick = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }


  render () {
    console.log(this.props.hog);
    return (
      <div className = 'ui eight wide column'>
        <div className = 'pigTile' >
          <h1>{this.props.hog.name}</h1>
          <img src={require(`../hog-imgs/${this.hogImage()}.jpg`)} onClick={this.handleClick}></img>
          {this.state.showInfo ?
            <div>
              <p>Specialty: {this.props.hog.specialty}</p>
              <p>Weight: {this.props.hog.weight} </p>
              <p>Highest Medal: {this.props.hog["highest medal achieved"]}</p>
              <p>Greased: {this.props.hog.greased ? "Yes" : "No"} </p>
            </div>
            :
            null
          }
          <div></div>
        </div>

      </div>
    )
  }
}
