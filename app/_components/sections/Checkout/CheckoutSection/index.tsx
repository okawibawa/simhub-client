"use client";

import { OrderSummary } from "./OrderSummary";
import { PaymentMethod } from "./PaymentMethod";

export const CheckoutSection = () => {
  return (
    <>
      <PaymentMethod />
      <OrderSummary />
    </>
  );
};
