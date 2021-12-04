import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../inday.png';
import Button from './Button';
import styled from 'styled-components';

class Navbar extends React.Component {
    render() { 
        const token = localStorage.getItem('token')
        console.log(`Token: ${token}`)
        if(token == null) {
            return (
                <NavWrap className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <Link to="/" >
                        <img src={logo} alt="store" className="nav-brand"/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                <strong>Home</strong>
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/products" className="nav-link">
                                <strong>Products</strong>
                            </Link>
                        </li>
                        {/* <li className="nav-item ml-5">
                            <Link to="/add" className="nav-link">
                                <strong>Add Product</strong>
                            </Link>
                        </li> */}
                        <li className="nav-item ml-5">
                            <Link to="/login" className="nav-link">
                                <strong>Login</strong>
                            </Link>
                        </li>
                        {/* <li className="nav-item ml-5">
                            <Link to="/logout" className="nav-link">
                                <strong>Logout</strong>
                            </Link>
                        </li> */}
                    </ul>
                <Link to='/favorites' className="ms-auto">
                    <Button>
                        <span className="mr-2">
                        <i class="fab fa-gratipay"></i>
                        </span>
                        Favorites
                    </Button>
                </Link>
                <Link to='/cart'>
                    <Button>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        Cart
                    </Button>
                </Link>
                </NavWrap>
            );


        } else {

            return (
                <NavWrap className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <Link to="/" >
                        <img src={logo} alt="store" className="nav-brand"/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                <strong>Home</strong>
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/products" className="nav-link">
                                <strong>Products</strong>
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/add" className="nav-link">
                                <strong>Add Product</strong>
                            </Link>
                        </li>
                        {/* <li className="nav-item ml-5">
                            <Link to="/login" className="nav-link">
                                <strong>Login</strong>
                            </Link>
                        </li> */}
                        <li className="nav-item ml-5">
                            <Link to="/logout" className="nav-link"  onClick={() => window.location.reload()}>
                                <strong>Logout</strong>
                            </Link>
                        </li>
                    </ul>
                <Link to='/favorites' className="ms-auto">
                    <Button>
                        <span className="mr-2">
                        <i class="fab fa-gratipay"></i>
                        </span>
                        Favorites
                    </Button>
                </Link>
                <Link to='/cart'>
                    <Button>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        Cart
                    </Button>
                </Link>
                </NavWrap>
            );


        }


    }
}

const NavWrap = styled.nav`
    background:var(--mainYellow);
    .nav-link{
        color: var(--mainWhite)!important;
        font-size:1.3rem;
        text-tranform: capitalize;
    }
`


 
export default Navbar;
