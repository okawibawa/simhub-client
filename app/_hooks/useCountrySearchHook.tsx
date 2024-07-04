import { useState, useEffect, ChangeEvent, useCallback } from "react";

import { countriesSearchAction } from "@/app/_actions";

export const useCountrySearchHook = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [randomCountry, setRandomCountry] = useState("Canada");
  const [countries, setCountries] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const COUNTRIES = ["Canada", "Tokyo", "United States", "France", "Germany"];

    const countryRandomizer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * COUNTRIES.length);
      setRandomCountry(COUNTRIES[randomIndex]);
    }, 5000);

    return () => clearInterval(countryRandomizer);
  }, []);

  useEffect(() => {
    if (!searchQuery) return;

    setIsLoading(true);

    countriesSearchAction(searchQuery).then((countries) => {
      setCountries(countries.data);

      setIsLoading(false);
    });

    return () => setCountries([]);
  }, [searchQuery]);

  const handleSearchCountries = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearchQuery(e.target.value);
    }, 300);
  };

  return {
    randomCountry,
    handleSearchCountries,
    countries,
    searchQuery,
    isLoading,
  };
};
