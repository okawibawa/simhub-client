import { Suspense } from "react";

import { PlanGrid } from "./PlanGrid";

import Loading from "./loading";

export const PlansSection = ({ slug }: { slug: string }) => {
  return (
    <Suspense fallback={<Loading />}>
      <PlanGrid slug={slug} />
    </Suspense>
  );
};
