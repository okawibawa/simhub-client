import { PlanCard } from "./PlanCard";

export const PlanGrid = async () => {
  await new Promise((r) => setTimeout(r, 5000));

  const esimPlans = [];

  if (esimPlans.length === 0) {
    return (
      <div className="my-6 w-full rounded-lg bg-zinc-900 px-5 py-10 text-center text-white">
        No plans available
      </div>
    );
  }

  return (
    <div className="my-6 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
      <PlanCard />
    </div>
  );
};
