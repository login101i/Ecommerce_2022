import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GmO1MCfVm83guzrbVCdP5zvM8tCtXSzEKTdhWwc70PEjKTKzYqaKrDIyKouQ1j4eTavmWVE2GWAyx586n5euxcv00Tu0MacLm";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is ${price} zł`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        email="maciejkruszyniak@gmail.com"
        currency="PLN"
      />
    
    </>
  );
};
