import React from "react";
import { Link } from "react-router-dom";

class Logout extends React.Component {

    componentDidMount(){
        localStorage.removeItem('token')
    }

    render(){

        const token = localStorage.getItem('token')
        if(token == null) {
            return (
                <div>
                    <h1>You are already logout! Please Login Again!</h1>
                    <Link to="/login/">Login Again</Link>
                </div>
                
            ); 
        } else {
            return (
                <div>
                    <h1>You have been Logout!</h1>
                    <Link to="/login/">Login Again</Link>
                </div>
                
            );
        }
    }
}

export default Logout;