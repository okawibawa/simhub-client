import { useCountryTabs } from "@/app/_stores";

export const useCountryTabsHook = () => {
  const { countryTab, setCountryTab } = useCountryTabs();

  const handleSelectTab = (tab: "local" | "global") => {
    setCountryTab(tab);
  };

  return {
    countryTab,
    handleSelectTab,
  };
};
