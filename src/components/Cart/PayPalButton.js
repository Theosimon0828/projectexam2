import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class MyApp extends React.Component {
  render() {
    const onSuccess = payment => {
      alert("Payment success!")
      console.log("The payment was succeeded!", payment);
      this.props.clearCart();
      this.props.history.push("/");

    };

    const onCancel = data => {

      console.log("The payment was cancelled!", data);

    };

    const onError = err => {

      console.log("Error!", err);

    };

    let env = "sandbox"; 
    let currency = "USD";


    const client = {
      // sandbox: process.env.React_APP_APP_ID, get yyour sanbox id on you paypal account
      sandbox: "AaP5w6BZ9yTeaeo3QCWREocJXRqz-gm3ZIQGFNp-8jtBcowVQblOG1fvyIf2PhUgge0t20MdVVHqA504",
      production: "YOUR-PRODUCTION-APP-ID"
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={this.props.totalAmount}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}