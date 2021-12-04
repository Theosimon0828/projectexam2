import React from 'react';

class EmptyCart extends React.Component {
    render() { 
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>Your Cart is empty!</h1>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default EmptyCart;
