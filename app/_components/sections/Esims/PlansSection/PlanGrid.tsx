import { esimPlansAction } from "@/app/_actions/esimPlans";

import { PlanCard } from "./PlanCard";

import { PlanFilter } from "./PlanFilter";

export const PlanGrid = async () => {
  const esimPlans = await esimPlansAction();

  console.log(esimPlans);

  if (!esimPlans.ok && esimPlans.code > 300) {
    return (
      <div className="my-6 w-full rounded-lg bg-zinc-900 px-5 py-10 text-center text-white">
        Error fetching eSIM plans. Please contact support.
      </div>
    );
  }

  if (esimPlans.ok && esimPlans.data.length === 0) {
    return (
      <div className="my-6 w-full rounded-lg bg-zinc-900 px-5 py-10 text-center text-white">
        No plans available
      </div>
    );
  }

  return (
    <div>
      <PlanFilter />

      <div className="my-6 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
        <PlanCard esimPlans={esimPlans.data} />
      </div>
    </div>
  );
};
