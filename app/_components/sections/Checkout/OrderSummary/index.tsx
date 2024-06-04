// atoms
import { Typography } from "@/app/_components/atoms";

export const OrderSummary = () => {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-5">
      <Typography as="body3" className="mb-2 font-semibold">
        Order Summary
      </Typography>

      <Typography as="body5" className="mb-6 text-zinc-400">
        You can review all the details before you proceed to purchase
      </Typography>

      <div></div>
    </div>
  );
};
