import React from "react";
import { Link } from "react-router-dom";
// import LoginForm from "../components/LoginForm";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component{

    render() {

        const token = localStorage.getItem('token')
        if(token != null) {
            return (
                <div className="mt-5"><h1>You need to logout to see this page</h1></div>
            );
        } else {
            return (
                <>
                <LoginForm/>
                </>
            );

        }

    }

}

export default LoginPage;




