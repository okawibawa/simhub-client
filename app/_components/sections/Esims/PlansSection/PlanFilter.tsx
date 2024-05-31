"use client";

// atoms
import { ButtonTabs } from "@/app/_components/atoms";

export const PlanFilter = async () => {
  await new Promise((r) => setTimeout(r, 10000));

  return (
    <>
      <div className="flex items-center space-x-5">
        <div className="flex items-center gap-x-2">
          <ButtonTabs>Roaming</ButtonTabs>
          <ButtonTabs>Local</ButtonTabs>
        </div>

        <div className="h-8 w-[1px] bg-zinc-500" />

        <div>
          <ButtonTabs>Unlimited</ButtonTabs>
        </div>
      </div>
    </>
  );
};
