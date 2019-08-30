import React from 'react'

export default class Hog extends React.Component {

  state={
    clicked: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div className='card' onClick={this.handleClick}>
      <p>Name:{' '} {this.props.hogData.name}</p>
      <img src={require(`../hog-imgs/${this.props.hogData.name.split(' ').join('_').toLowerCase()}.jpg`)} alt=''/>

      {this.state.clicked ?
        <p>Specialty: {' '} {this.props.hogData.specialty}
        <br></br>
        Medal: {' '} {this.props.hogData['highest medal achieved']}
        <br></br>
        Weight: {' '} {this.props.hogData.weight}
        </p>
        : null}

      </div>
    )

  }

}
