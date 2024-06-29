"use client";

// atoms
import { ButtonTabs } from "@/app/_components/atoms";

import { capitalizeString } from "@/app/_utils";

import { useEsimPlansStore } from "@/app/_stores";
import { useEffect } from "react";

export const PlanFilter = ({
  planTypes,
}: {
  planTypes: ["roaming", "local"];
}) => {
  const { planType, setPlanType, resetPlanType } = useEsimPlansStore();

  useEffect(() => {
    resetPlanType();
  }, []);

  return (
    <>
      <div className="flex items-center space-x-5 overflow-scroll md:overflow-hidden">
        <div className="flex items-center gap-x-2">
          {planTypes.map((type) => (
            <ButtonTabs
              key={type}
              onClick={() => setPlanType(type)}
              isActive={type === planType}
            >
              {capitalizeString(type)}
            </ButtonTabs>
          ))}
        </div>

        <div className="h-8 w-[1px] bg-zinc-500" />

        <div className="flex items-center gap-x-2">
          {planType === "roaming" && (
            <ButtonTabs
              className="flex items-center gap-x-2"
              isDisabled
              isActive
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-infinity"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828" />
              </svg>
              Unlimited
            </ButtonTabs>
          )}

          {planType === "local" && (
            <ButtonTabs
              className="flex items-center gap-x-2"
              isDisabled
              isActive
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-infinity-off"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8.165 8.174a4 4 0 0 0 -5.166 3.826a4 4 0 0 0 6.829 2.828a10 10 0 0 0 2.172 -2.828m1.677 -2.347a10 10 0 0 1 .495 -.481a4 4 0 1 1 5.129 6.1m-3.521 .537a4 4 0 0 1 -1.608 -.981a10 10 0 0 1 -2.172 -2.828" />
                <path d="M3 3l18 18" />
              </svg>
              Quota
            </ButtonTabs>
          )}
        </div>
      </div>
    </>
  );
};
