import { Suspense } from "react";

import { PlanFilter } from "./PlanFilter";
import { PlanGrid } from "./PlanGrid";

import LoadingFilter from "./loading-plan-filter";
import Loading from "./loading";

export const PlansSection = () => {
  return (
    <div>
      <Suspense fallback={<LoadingFilter />}>
        <PlanFilter />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <PlanGrid />
      </Suspense>
    </div>
  );
};
