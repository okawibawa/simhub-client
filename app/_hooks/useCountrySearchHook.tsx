import { useState, useEffect } from "react";

export const useCountrySearchHook = () => {
  const [randomCountry, setRandomCountry] = useState("Canada");

  useEffect(() => {
    const COUNTRIES = ["Canada", "Tokyo", "United States", "France", "Germany"];

    const countryRandomizer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * COUNTRIES.length);
      setRandomCountry(COUNTRIES[randomIndex]);
    }, 5000);

    return () => clearInterval(countryRandomizer);
  }, []);

  return {
    randomCountry,
  };
};
