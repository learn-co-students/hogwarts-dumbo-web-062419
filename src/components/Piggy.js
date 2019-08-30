// import React from 'react'
//
//
// export default class Piggy extends React.Component {
//
//   render() {
//     // console.log(this.props.porks[2].name.toLowerCase().split(" ").join("_"))
//
//   function greaseStatus(pork) {
//                 if(pork.greased === false) {
//                   return "Not greased";
//                 } else {
//                   return "greased";
//                 }
//             }
//
//   const pork = this.props.porks.map(porky => (
//
//      <div className="ui card">
//         <img src={require(`../hog-imgs/${porky.name.split(' ').join('_').toLowerCase()}.jpg`)} alt={porky.name} />
//         <p className="header">{porky.name}</p>
//         <p className="speciality">{porky.specialty}</p>
//         <p className="grease-weight">{porky.weight} tons  - {greaseStatus(porky)}</p>
//      </div>
//    )
//  );
//
//  return (
//    <div className="row">
//     <div className="ui three cards"> {pork} </div>
//    </div>
//  )
// }
// 
// }
