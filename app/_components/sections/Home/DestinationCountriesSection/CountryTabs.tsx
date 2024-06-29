"use client";

// atoms
import { ButtonTabs } from "@/app/_components/atoms";

// hooks

export const CountryTabs = () => {
  return (
    <div className="space-x-2">
      <ButtonTabs>Local eSIMs</ButtonTabs>
      <ButtonTabs>Global eSIMs</ButtonTabs>
    </div>
  );
};
