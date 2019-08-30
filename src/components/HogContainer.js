import React from 'react'
import HogTile from './HogTile.js'

export default class HogContainer extends React.Component {

  render() {

    const hogTiles = this.props.allHogs.map((hog) => {
      return < HogTile key={hog.name} hog={hog} />
    })

    return <div>{hogTiles}</div>

  }

}
