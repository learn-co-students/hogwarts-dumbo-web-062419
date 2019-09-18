import React, { Component } from 'react'

export class OneHog extends Component {

    state = {
        showInfo: false
    };


    getImg = () => {
        const name = this.props.hog.name
            .split(" ")
            .join("_")
            .toLowerCase();
        const img = require(`../hog-imgs/${name}.jpg`)
        return img
    }

    showHogInfo = () => {
        this.setState({showInfo: !this.state.showInfo})
    }

    //
    render() {
       
        
        return (
            <div className="ui eight wide column">
                <h1>{this.props.name}</h1>
                <img src= {this.getImg()} alt="" onClick={this.showHogInfo}/>
                {this.state.showInfo ? (
                <div>
                    <div>Name: {this.props.hog.name} </div>
                    <div>Speciality: {this.props.hog.specialty}</div>
                    <div>Greased: {this.props.hog.greased ? "YESSSSSS" : "nah"} </div>
                    <div>Weight: {this.props.hog.weight}</div>
                </div>
                ): null}
            </div>
            
        )
    }
}

export default OneHog

