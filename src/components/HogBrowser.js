import React from 'react'
import Hog from './Hog'

export default class HogBrowser extends React.Component {

  render() {
    const allHogs = this.props.hogs.map(hog => {
      return <Hog hogData={hog} key={hog.name} />})
    return (
      <div className='ui link cards'>
      {allHogs}
      </div>
    )
  }

}
