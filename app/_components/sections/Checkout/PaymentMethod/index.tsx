"use client";

import { useState } from "react";
import Image from "next/image";

// atoms
import { Typography } from "@/app/_components/atoms";

export const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("mastercard");

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-5">
      <div className="mb-2 flex items-center justify-between">
        <Typography as="body3" className="font-semibold">
          Payment Method
        </Typography>

        <Typography as="body7" className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#22C55E"
            className="icon icon-tabler icons-tabler-filled icon-tabler-shield-check"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
          </svg>
          All transactions are safe and secure
        </Typography>
      </div>

      <Typography as="body5" className="mb-6 text-zinc-400">
        Select the payment method to complete your order.
      </Typography>

      <div>
        <div className="relative mb-1 flex cursor-pointer items-center gap-2 rounded-lg bg-black p-4">
          <Image
            src="/mastercard-checkout.png"
            alt="mastercard"
            width={60}
            height={20}
          />
          <Typography as="body5" className="flex-1">
            Debit or Credit
          </Typography>

          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border p-0.5 ${
              paymentMethod === "mastercard"
                ? "border-orange-500"
                : "border-white"
            }`}
          >
            {paymentMethod === "mastercard" && (
              <div className="h-4 w-4 rounded-full bg-orange-500" />
            )}
          </div>

          <input
            type="radio"
            name="payment-method"
            id="mastercard"
            value="mastercard"
            onChange={handlePaymentMethodChange}
            className="absolute inset-0 cursor-pointer appearance-none"
          />
        </div>

        <div className="relative flex cursor-pointer items-center gap-2 rounded-lg bg-black p-4">
          <Image
            src="/paypal-checkout.png"
            alt="mastercard"
            width={60}
            height={20}
          />
          <Typography as="body5" className="flex-1">
            PayPal
          </Typography>

          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border p-0.5 ${
              paymentMethod === "paypal" ? "border-orange-500" : "border-white"
            }`}
          >
            {paymentMethod === "paypal" && (
              <div className="h-4 w-4 rounded-full bg-orange-500" />
            )}
          </div>

          <input
            type="radio"
            name="payment-method"
            id="paypal"
            value="paypal"
            onChange={handlePaymentMethodChange}
            className="absolute inset-0 cursor-pointer appearance-none"
          />
        </div>
      </div>
    </div>
  );
};
