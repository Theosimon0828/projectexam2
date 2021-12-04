import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import photoopen from "./image/open.png"

class Home extends React.Component {
    render(){
        return(
            <>

            <div className="wrapper">
            <Carousel />
            </div>

            <section id="hero">
            <div className="container">
                <div className="row" >
                    <div className="col" id="main-banner">
                        <h1 style={{textAlign:"center"}} className="mb-4">Inday's<br/>Sari Sari Store</h1>
                        <p style={{textAlign:"center"}} className="mb-4">Inday's sari sari store is here to serve you with our wide range of goods at affordable prices</p>
                        <Link to="/products">
                        <button type="button" className="button-banner">Shop NoW</button>
                        </Link>
                    </div>
                </div>
            </div>
            
            </section>

            <div className="openwrapper">
                <img src={photoopen} className="img-fluid open" alt="opening"></img>
            </div>

            </>
        );
    }
}

export default Home;
