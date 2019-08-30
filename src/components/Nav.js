import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<button onClick={props.handleFilter}>Filter by grease</button>
			<button onClick={props.alphabeticalHogs}>Filter Alphebetically</button>
			<button onClick={props.weightedHogs}>Filter by Weight</button>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav
