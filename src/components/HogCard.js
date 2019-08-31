import React from "react";

class HogCard extends React.Component {
    render(){

        const pork = this.props.pork;

        function greaseStatus(pork) {
            if(pork.greased === false) {
                return "Not greased";
            } else if(pork.greased === true){
                return "greased";
            }
        }

        {console.log(pork)}
        return (            
            
            <div key={pork.index} className="ui card">
                <div className="image">
                    <img src={require(`../hog-imgs/${pork.name.split(' ').join('_').toLowerCase()}.jpg`)} alt={pork.name} />
                </div>
                <div className="content">
                    <a href="#" className="header">{pork.name}</a>
                    <div className="meta">
                        <span className="date">{pork.specialty}</span>
                    </div>
                    <div className="description">
                    <i className="trophy icon"></i> {pork["highest medal achieved"]}
                    </div>
                    <div className="extra content">
                        {pork.weight} tons - {greaseStatus(pork)}
                    </div>
                </div>
            </div>
        );
    }
}

export default HogCard;