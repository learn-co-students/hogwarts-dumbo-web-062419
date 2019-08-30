import React from "react";

class HogTiles extends React.Component {

    render() {

        function greaseStatus(pork) {
            if(pork.greased == false) {
                return "Not greased";
            } else if(pork.greased == true){
                return "greased";
            }
        }

        const pork = this.props.porks.map(porky => console.log(porky) || (

            
            <div className="ui card">
                <div className="image">
                    <img src={require(`../hog-imgs/${porky.name.split(' ').join('_').toLowerCase()}.jpg`)} alt={porky.name} />
                </div>
                <div className="content">
                    <a href="#" className="header">{porky.name}</a>
                    <div className="meta">
                        <span className="date">{porky.specialty}</span>
                    </div>
                    <div className="description">
                    <i className="trophy icon"></i> {porky["highest medal achieved"]}
                    </div>
                    <div className="extra content">
                        {porky.weight} tons - {greaseStatus(porky)}
                    </div>
                </div>
            </div>
            )
        );

        return (
            <div className="row">
                <div className="ui three cards">
                    {pork}
                </div>
            </div>
        );
    }
}

export default HogTiles;