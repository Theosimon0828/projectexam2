import React from "react";
import styled from "styled-components";
import {ProductConsumer} from '../context'
import Button from "./Button";
import { Link } from "react-router-dom";

class Modal extends React.Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal, modalOpenFav, closeModalFav} =value;
                    const {img, title, price} = value.modalProduct;
                    const apiUrl = 'http://localhost:1337'
                    
                    
                    if(!modalOpen || !modalOpenFav) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center">
                                        <h5>Item added to the cart!</h5>
                                        <img className="img-fluid"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">
                                            price: $ {price}
                                        </h5>
                                        <Link to="/products">
                                            <Button onClick={() => closeModal()}>
                                                Products
                                            </Button>
                                        </Link>
                                        <Link to="/cart">
                                            <Button className="gotocart" onClick={() => closeModal()}>
                                                Go to Cart
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center">
                                        <h5>Item added to the favorites!</h5>
                                        <img className="img-fluid"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">
                                            price: $ {price}
                                        </h5>
                                        <Link to="/products">
                                            <Button onClick={() => closeModalFav()}>
                                                Products
                                            </Button>
                                        </Link>
                                        <Link to="/favorites">
                                            <Button className="gotocart" onClick={() => closeModalFav()}>
                                                Go to Favorites
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;

.gotocart:hover {
    background: var(--mainYellow);
    border-color: var(--mainYellow);
    color:var(--mainWhite);
}

.gotocart {
    color:var(--mainYellow);
    border-color: var(--mainYellow);
}

#modal {
    background: var(--mainWhite);
    border-radius:20px;
    padding:25px;c
  }
`

export default Modal;