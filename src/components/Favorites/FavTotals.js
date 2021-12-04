import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class FavTotals extends Component {
  render() {
    const {
      favSubTotal,
      favTax,
      favTotal,
      fav,
      clearCart
    } = this.props.value;
    const { history } = this.props;
    const emptyFav = fav.length === 0 ? true : false;
    return (
        <React.Fragment>
        {!emptyFav && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 mr-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong>$ {favSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span>{" "}
                  <strong>$ {favTax} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong>$ {favTotal} </strong>
                </h5>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}