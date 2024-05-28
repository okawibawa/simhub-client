import { useEffect, useState } from "react";

// stores
import { useCountryTabs } from "@/app/_stores";

interface CountryGridProps {
  countries: { name: string; code: string; flag: string }[];
}

export const useCountryGrid = ({ countries }: CountryGridProps) => {
  const { countryTab } = useCountryTabs();

  const [filteredCountries, setFilteredCountries] =
    useState<{ name: string; code: string; flag: string }[]>(countries);

  useEffect(() => {
    if (countryTab === "local") {
      setFilteredCountries(
        countries.filter((country) => country.code !== "GB")
      );
      return;
    }

    if (countryTab === "global") {
      setFilteredCountries(
        countries.filter((country) => country.code === "GB")
      );
      return;
    }
  }, [countries, countryTab]);

  return { filteredCountries };
};
