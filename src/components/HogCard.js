import React from "react";

class HogCard extends React.Component {

    state = {
        clicked: false
    }


    clickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    
    render(){
        const pork = this.props.pork;

        return (            
            
            <div key={pork.index} className="ui card" onClick={this.clickHandler}>
                <div className="image">
                    <img src={require(`../hog-imgs/${pork.name.split(' ').join('_').toLowerCase()}.jpg`)} alt={pork.name} />
                </div>
                <div className="content">
                    <a href={null} className="header">{pork.name}</a>

                    {this.state.clicked ?  
                    
                        <div>
                            <div className="meta">
                                <p>Specialty: <span className="date">{pork.specialty}</span></p>
                            </div>
                            <div className="description">
                            <i className="trophy icon"></i> {pork["highest medal achieved"]}
                            </div>
                            <div className="extra content">
                                {pork.weight} tons - {pork.greased ? "Greased" : "Not greased"}
                            </div>
                        </div>
                        
                    : null }
                </div>
            </div>
        );
    }
}

export default HogCard;