"use client";

import { IconSearch } from "@tabler/icons-react";

// hooks
import { useCountrySearchHook } from "@/app/_hooks";

export const CountrySearch = () => {
  const { randomCountry } = useCountrySearchHook();

  return (
    <div className="relative mx-auto mb-4 w-full max-w-[580px] lg:mx-0 lg:w-1/2">
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
