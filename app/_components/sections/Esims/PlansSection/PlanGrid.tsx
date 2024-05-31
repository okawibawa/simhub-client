import { PlanCard } from "./PlanCard";

export const PlanGrid = async () => {
  await new Promise((r) => setTimeout(r, 10000));

  return (
    <div className="my-6 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
      <PlanCard />
    </div>
  );
};
