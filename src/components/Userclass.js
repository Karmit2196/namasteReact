import React from "react";


class Userclass extends React.Component {
    constructor(props){
        super(props);

        this.state= {

        }
    }

    render(){
        const{name,location} = this.props;
        const{count}=this.state;

        return(
            <div className="user-card">
                <h1>{name}</h1>
                <h2>{location}</h2>
            </div>
        )
    }
}


export default Userclass;