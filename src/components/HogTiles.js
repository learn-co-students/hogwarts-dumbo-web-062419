import React from "react";
import HogCard from "./HogCard";

class HogTiles extends React.Component {

    render() {

        const pork = this.props.porks.map(porky => (

            <HogCard pork ={porky} />
            
            )
        );

        return (
            <div className="row">
                <div className="ui four cards">
                    {pork}
                </div>
            </div>
        );
    }
}

export default HogTiles;