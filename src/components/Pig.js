import React from 'react'
// import hogImgs from 'hog-imgs'

export default class Pig extends React.Component {

    state = {
        clicked: false,
        hidden: false
    }

    pigImgMaker = () => {
      const name = this.props.pig.name.toLowerCase().split(' ').join('_')
    //   console.log(name)
    //   console.log(img)
        const image = require(`../hog-imgs/${name}.jpg`)
        return image
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    hideClick = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }
    render() {
        // console.log(this.props)


         
        if (this.state.hidden === false){
            return (           
                <div className="ui eight wide column">
                    <img src={this.pigImgMaker()} onClick={this.handleClick}/>
                    <p>{this.props.pig.name}</p>
                    {this.state.clicked ? <div>
                        <p>Specialty {this.props.pig.specialty}</p>
                        <p>Weight: {this.props.pig.weight}</p>
                    </div> : <div></div>}
                    <button onClick={this.handleClick}>Show Info</button>
                    <button onClick={this.hideClick}>Hide this Hog</button> 
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.hideClick}>Show Hog</button>
                </div>
            )
        }
    }
}