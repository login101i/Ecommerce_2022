import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GmO1MCfVm83guzrbVCdP5zvM8tCtXSzEKTdhWwc70PEjKTKzYqaKrDIyKouQ1j4eTavmWVE2GWAyx586n5euxcv00Tu0MacLm";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
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
      <StripeCheckout
        name="Three Comma Co." // the pop-in header title
        description="Big Data Stuff" // the pop-in header subtitle
        image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
        ComponentClass="div"
        label="Buy the Thing" // text inside the Stripe button
        panelLabel="Give Money" // prepended to the amount in the bottom pay button
        amount={priceForStripe} // cents
        currency="USD"
        stripeKey={publishableKey}
        locale="zh"
        email="maciejkruszyniak@gmail.com"
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress
        billingAddress={false}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        alipay // accept Alipay (default false)
        bitcoin // accept Bitcoins (default false)
        allowRememberMe // "Remember Me" option (default true)
        token={onToken} // submit callback
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        triggerEvent="onTouchTap"
      />
    </>
  );
};
