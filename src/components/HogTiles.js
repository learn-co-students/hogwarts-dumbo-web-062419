import React from "react";
import HogCard from "./HogCard";

class HogTiles extends React.Component {
    
    pork = () => (this.props.porks.map(pork => <HogCard key={pork.name} pork={pork} />));

    render() {
        return (
            <div className="row">
                <div className="ui four cards">
                    {this.pork()}
                </div>
            </div>
        );
    }
}

export default HogTiles;