import { fetchEsimPlans } from "@/app/_actions/esimActions";

import { PlanCard } from "./PlanCard";

import { PlanFilter } from "./PlanFilter";
import { esimPlansEntity } from "@/app/_types/entities/esimPlans";

export const PlanGrid = async ({ slug }: { slug: string }) => {
  const esimPlans = await fetchEsimPlans({ countryCode: slug });

  if (!esimPlans.ok && esimPlans.code > 300) {
    return (
      <div className="my-6 w-full rounded-lg bg-zinc-900 px-5 py-10 text-center text-white">
        We are having some issues fetching eSIM plans. Please try again later or
        contact support.
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

  const planTypes = [
    ...new Set(
      esimPlans.data.map((esimPlan: esimPlansEntity) => esimPlan.type)
    ),
  ] as ["roaming", "local"];

  return (
    <div>
      <PlanFilter planTypes={planTypes} />

      <div className="my-6 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
        <PlanCard esimPlans={esimPlans.data} slug={slug} />
      </div>
    </div>
  );
};
