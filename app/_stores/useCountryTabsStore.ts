import { create } from "zustand";

interface CountryTabsState {
  countryTab: "local" | "global";
  setCountryTab: (countryTab: "local" | "global") => void;
}

export const useCountryTabsStore = create<CountryTabsState>((set) => ({
  countryTab: "local",
  setCountryTab: (countryTab: "local" | "global") => set({ countryTab }),
}));
