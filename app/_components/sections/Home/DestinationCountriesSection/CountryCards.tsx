"use client";

import React from "react";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

// hooks
import { useCountryGrid } from "@/app/_hooks";

// atoms
import { Anchor } from "@/app/_components/atoms";
import { getCountryUrlBasedOnCountryCode } from "@/app/_utils";

interface CountryData {
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}

interface CountryGridProps {
  countries: {
    ok: boolean;
    message: string;
    data: CountryData[];
  };
}

export const CountryCard = ({ countries }: CountryGridProps) => {
  // const { filteredCountries } = useCountryGrid({
  // countries: countries,
  //});

  if (countries.data && countries.data.length === 0) {
    return (
      <div className="w-full rounded-lg bg-zinc-900 px-5 py-10 text-center text-white">
        No countries available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
      {countries.data.map((country, index) => (
        <Anchor
          key={index}
          className="flex items-center gap-4 rounded-lg bg-zinc-900 px-5 py-4"
          href={`/esims/${getCountryUrlBasedOnCountryCode(country.code)}`}
        >
          <Image
            src={`/flags/${country.code.toLowerCase()}.png`}
            width={26}
            height={26}
            alt={country.name}
          />
          <span className="flex-1">{country.name}</span>
          <IconArrowRight size={24} color="white" />
        </Anchor>
      ))}
    </div>
  );
};
