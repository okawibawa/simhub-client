"use client";

import { useState, useEffect } from "react";
import { IconSearch } from "@tabler/icons-react";

export const CountrySearch = () => {
  const [randomCountry, setRandomCountry] = useState("Canada");

  useEffect(() => {
    const COUNTRIES = ["Canada", "Tokyo", "United States", "France", "Germany"];

    const countryRandomizer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * COUNTRIES.length);
      setRandomCountry(COUNTRIES[randomIndex]);
    }, 5000);

    return () => clearInterval(countryRandomizer);
  }, []);

  return (
    <div className="relative mx-auto mb-4 w-full max-w-[580px]">
      <input
        type="text"
        placeholder={randomCountry}
        className="w-full rounded-full py-3 pl-[44px] pr-4"
      />
      <IconSearch
        size={24}
        color="#A1A1AA"
        className="absolute left-4 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};
