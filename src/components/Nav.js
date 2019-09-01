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
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<p><button onClick = {props.toggleFilter}> Filter Greased</button></p>
			<p><button onClick = {props.toggleName}> Sort by Name</button></p>
			<p><button onClick = {props.toggleWeight}> Sort by Weight</button></p>
		</div>
	)
}

export default Nav
