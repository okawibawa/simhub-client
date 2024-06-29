import { Suspense } from "react";

import { PlanGrid } from "./PlanGrid";

import Loading from "./loading";

export const PlansSection = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <PlanGrid />
      </Suspense>
    </div>
  );
};
