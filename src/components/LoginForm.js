import React from "react";
// import LoginFormAPI from "./LoginFormAPI";
import LoginFormAPI from "./LoginFormAPI";
import axios from "axios";
import { Redirect } from "react-router";

class LoginForm extends React.Component {

    onSearchSubmit(user, password){
        axios
        .post('http://localhost:1337/auth/local', {
        identifier: user,
        password: password,
        })
        .then(response => {
        // Handle success.
        localStorage.setItem('token', response.data.jwt)
        localStorage.setItem('username', response.data.user.username)
        localStorage.setItem('password', response.data.user.password)
        console.log('Well done!');
        console.log(response.data.user.username);
        console.log('User token', response.data.jwt);
        })
        .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        });
    }

    render(){

        return (
            <div className="p-5">
                <LoginFormAPI onSubmit={this.onSearchSubmit}/>
            </div>
    
        );
    }
}

export default LoginForm;



