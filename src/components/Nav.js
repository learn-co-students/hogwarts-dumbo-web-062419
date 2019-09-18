import piggy from '../porco.png'
import React, { Component } from 'react'

class Nav extends Component {
	render() { 
		return (
			<div className="navWrapper">
				<span className="headerText" onClick={this.refresh}>Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<button onClick={() => this.props.filterByGrease()}>Filter By Grease</button>
			</div>
		);
	}
}
 
export default Nav;

// const Nav = () => {
// 	return (
// 		<div className="navWrapper">
// 			<span className="headerText">Hogwarts</span>
// 			<div className="TwirlyPig" onClick {}>
// 				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
// 					<img src={piggy} className="App-logo" alt="piggy" />
// 				</a>
// 			</div>
// 			<span className="normalText">A React App for County Fair Hog Fans</span>
// 		</div>
// 	)
// }

// export default Nav
