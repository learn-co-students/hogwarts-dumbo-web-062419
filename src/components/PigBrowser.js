import React from 'react'
import Pig from './Pig'

export default class PigBrowser extends React.Component {

  
    render() {


        if (this.props.filtered === false){
           const currentPigs = this.props.pigs 
           const pigComps = currentPigs.map(pig => <Pig key={pig.id} pig={pig} />)
           return (
            <div className="ui grid container">
                {pigComps}
            </div>
            )
        } else if (this.props.filtered === true){
            const currentPigs = this.props.pigs.filter(pig => pig.greased === true) 
            const pigComps = currentPigs.map(pig => <Pig key={pig.id} pig={pig} />)
            return (
                <div className="ui grid container">
                `{pigComps}
                </div>
            )
        }

    }
}