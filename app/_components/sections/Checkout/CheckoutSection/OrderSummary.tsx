"use client";

import { useState } from "react";

// atoms
import { Button, Typography } from "@/app/_components/atoms";

export const OrderSummary = () => {
  const [isEsimSupportCheckboxChecked, setIsEsimSupportCheckboxChecked] =
    useState(false);

  const handleEsimSupportCheckboxChange = () => {
    setIsEsimSupportCheckboxChecked(!isEsimSupportCheckboxChecked);
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-5">
      <Typography as="body3" className="mb-2 font-semibold">
        Order Summary
      </Typography>

      <Typography as="body5" className="mb-6 text-zinc-400">
        You can review all the details before you proceed to purchase
      </Typography>

      <div className="mb-10 space-y-5">
        <div className="flex items-center justify-between">
          <Typography as="body5">
            13 Asian Countries, Unlimited Plan, Roaming, 7 days
          </Typography>
          <Typography as="body4">$22</Typography>
        </div>

        <div className="h-[1px] w-full bg-zinc-600" />

        <div className="mb-5 flex items-center justify-between">
          <Typography as="body3">Total</Typography>
          <Typography as="body1">$22</Typography>
        </div>
      </div>

      <Typography as="body5" className="mb-3 text-zinc-400">
        Affiliate code: <span className="text-zinc-50">asHvf7</span>
      </Typography>

      <div className="relative mb-1 flex items-start gap-2 rounded-lg bg-black px-4 py-3">
        <input
          type="checkbox"
          id="esim-support"
          className="absolute appearance-none"
          checked={isEsimSupportCheckboxChecked}
          onChange={handleEsimSupportCheckboxChange}
        />
        <div
          onClick={handleEsimSupportCheckboxChange}
          className={`h-6 w-6 cursor-pointer rounded-md border p-1 ${isEsimSupportCheckboxChecked ? "border-orange-500" : "border-white"}`}
        >
          {isEsimSupportCheckboxChecked ? (
            <div className="h-full w-full rounded-sm bg-orange-500" />
          ) : null}
        </div>
        <label htmlFor="esim-support" className="cursor-pointer">
          <Typography
            as="body5"
            className="select-none font-normal text-zinc-300"
          >
            Yes, my device supports eSIM.
          </Typography>
        </label>
      </div>

      <Typography as="body7" className="mb-3 font-normal text-zinc-300">
        Not sure if your device supports eSIM?{" "}
        <span className="text-orange-500 underline">Check here</span>.
      </Typography>

      <Button className="w-full">Checkout</Button>

      <Typography
        as="body7"
        className="mt-6 text-center font-normal text-zinc-300"
      >
        By completing the order, you agree to SimHub&apos;s{" "}
        <span className="text-orange-500">Terms & Conditions</span> and{" "}
        <span className="text-orange-500">Privacy Policy</span>.
      </Typography>
    </div>
  );
};
