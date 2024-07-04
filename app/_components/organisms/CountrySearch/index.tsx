"use client";

import { IconSearch } from "@tabler/icons-react";

import { Anchor, Typography } from "../../atoms";

// hooks
import { useCountrySearchHook } from "@/app/_hooks";

import { getCountryUrlBasedOnCountryCode } from "@/app/_utils";

export const CountrySearch = () => {
  const {
    randomCountry,
    handleSearchCountries,
    countries,
    searchQuery,
    isLoading,
  } = useCountrySearchHook();

  return (
    <div className="relative mx-auto mb-4 w-full max-w-[580px] lg:mx-0 lg:w-1/2">
      <input
        type="text"
        placeholder={randomCountry}
        className="w-full rounded-full py-3 pl-[44px] pr-4"
        onChange={handleSearchCountries}
      />

      {searchQuery ? (
        isLoading ? (
          <div className="absolute left-0 top-full mt-1 w-full overflow-hidden rounded-md bg-white">
            <Typography as="body7" className="px-4 py-3 text-zinc-900">
              Loading...
            </Typography>
          </div>
        ) : countries.length === 0 ? (
          <div className="absolute left-0 top-full mt-1 w-full overflow-hidden rounded-md bg-white">
            <Typography as="body7" className="px-4 py-3 text-zinc-900">
              No results found
            </Typography>
          </div>
        ) : (
          <div className="absolute left-0 top-full mt-1 w-full overflow-hidden rounded-md bg-white">
            {countries.map((country: { code: string; name: string }) => (
              <Anchor
                key={country.code}
                className="inline-block w-full cursor-pointer px-4 py-3 text-zinc-900 hover:bg-[#f3f4f6]"
                href={`/esims/${getCountryUrlBasedOnCountryCode(country.code)}`}
              >
                {country.name}
              </Anchor>
            ))}
          </div>
        )
      ) : null}

      <IconSearch
        size={24}
        color="#A1A1AA"
        className="absolute left-4 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};
