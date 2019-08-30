import React from 'react';
import Hog from './Hog';


export default class HogBrowser extends React.Component {

  render() {
    // console.log("HogBrowser hit");
    const allHogs = this.props.hogs.map(hog => {
      return <Hog hogData={hog} key={hog.name} />
    })
    return (
      <div className="ui grid container">
        {allHogs}
      </div>
    )
  }
}
