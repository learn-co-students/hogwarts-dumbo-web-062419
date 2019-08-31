import React from "react";
import HogCard from "./HogCard";

class HogContainer extends React.Component {

    render() {

        const hogTiles = this.props.hog.map((hog) => {
            console.log(hog)
        })

        return (
            <div>{this.hogTiles}</div>
        );
    }
}

export default HogContainer;

