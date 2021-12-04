import React from 'react';

class EmptyFav extends React.Component {
    render() { 
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>Your Favorite is empty!</h1>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default EmptyFav;
