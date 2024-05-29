import { useCountryTabsStore } from "@/app/_stores";

export const useCountryTabsHook = () => {
  const { countryTab, setCountryTab } = useCountryTabsStore();

  const handleSelectTab = (tab: "local" | "global") => {
    setCountryTab(tab);
  };

  return {
    countryTab,
    handleSelectTab,
  };
};
