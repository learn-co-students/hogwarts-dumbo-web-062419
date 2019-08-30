import React, { Component } from "react";
import Hog from "./Hog.js";

export default class HogContainer extends Component {

  render() {
    const allHogs = this.props.allHogs.map(hog => {
      return <Hog hog={hog} />;
    });
    return <div className="ui grid container">{allHogs}</div>;
  }

}
