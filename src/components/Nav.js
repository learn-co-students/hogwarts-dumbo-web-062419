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
			<p>
				<button onClick={props.toggleGreased} className="ui primary button">Filter greased pigs</button>
				<button onClick={props.toggleName} className="ui primary button">Sort by name</button>
				<button onClick={props.toggleWeight} className="ui primary button">Sort by weight</button>
			</p>
		</div>
	)
}

export default Nav
