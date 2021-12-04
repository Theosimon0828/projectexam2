import React from 'react';
import {ProductConsumer} from "../context"
import { Link } from 'react-router-dom';
import Button from "./Button"

class Details extends React.Component {

    render() { 
        return (
            <ProductConsumer>
                {value => {
                   const {id, img, info, price, title, inCart} = value.detailProduct;
                    const apiUrl = 'http://localhost:1337'
                    return (
                        <div>
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-yellow my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    {img.map((item, index) => {
                                        return <img key={index} src={apiUrl+item.url} className="img-fluid"  alt="product" />
                                    })}
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Name: {title}</h2>
                                    <h4 className="text-yellow">
                                        <strong>
                                            price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize fw-bold mt-3 mb-0">
                                        Product Info:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div>
                                        <Link to="/products">
                                            <Button>
                                            Back to Products
                                            </Button>
                                            <Button
                                            cart
                                            disabled={inCart?true:false}
                                            onClick={() => {
                                                value.addCart(id);
                                                value.openModal(id);;
                                            }}
                                            >
                                                {inCart ? "inCart" : "Add to Cart"}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

 
export default Details;



