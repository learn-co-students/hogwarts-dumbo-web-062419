import React, { Component } from 'react'
import OneHog from './OneHog'


export class Hogtiles extends Component {
    render() {
        const allHogs = this.props.allHogs.map((hog => {
            return <OneHog key={hog.name} hog={hog}/>
        }))

        // console.log(allHogs);
        
        return (<div className="ui grid container">{allHogs}</div>)
    }
}

export default Hogtiles
