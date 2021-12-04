import React from "react";
import { FaWindows } from "react-icons/fa";
import { Redirect } from "react-router";
// import axios from 'axios';

class LoginFormAPI extends React.Component {
    state = {user:'', password:'', loggedIn:false}

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.user, this.state.password)
        const token = localStorage.getItem('token')

        if(token != null) {
            setTimeout(() => {
                window.location.reload()
            }, 50)
            this.setState({loggedIn:true})
        }
    }
    

    
    render(){
        
        if(this.state.loggedIn) {
            return <Redirect  to="/"/>
        }
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.user} onChange={e => this.setState({user:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={e => this.setState({password:e.target.value})}/>
                    </div>
                    <button id="login"  type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
    
        );
    }
}

export default LoginFormAPI;













// axios
// .post('http://localhost:1337/auth/local', {
//   identifier: 'admin',
//   password: 'test1234',
// })
// .then(response => {
//   // Handle success.
//   console.log('Well done!');
//   console.log(response.data.user.username);
//   console.log('User token', response.data.jwt);
// })
// .catch(error => {
//   // Handle error.
//   console.log('An error occurred:', error.response);
// });
