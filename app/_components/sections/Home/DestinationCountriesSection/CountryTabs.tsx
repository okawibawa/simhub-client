"use client";

// atoms
import { ButtonTabs } from "@/app/_components/atoms";

// hooks
import { useCountryTabsHook } from "@/app/_hooks";

export const CountryTabs = () => {
  const { countryTab, handleSelectTab } = useCountryTabsHook();

  return (
    <div className="space-x-2">
      <ButtonTabs
        onClick={() => handleSelectTab("local")}
        isActive={countryTab === "local"}
      >
        Local eSIMs
      </ButtonTabs>
      <ButtonTabs
        onClick={() => handleSelectTab("global")}
        isActive={countryTab === "global"}
      >
        Global eSIMs
      </ButtonTabs>
    </div>
  );
};
