"use client";

import React from "react";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

// hooks
import { useCountryGrid } from "@/app/_hooks";

// atoms
import { Anchor } from "@/app/_components/atoms";

interface CountryGridProps {
  countries: { name: string; code: string; flag: string }[];
}

export const CountryCard = ({ countries }: CountryGridProps) => {
  const { filteredCountries } = useCountryGrid({
    countries: countries,
  });

  if (filteredCountries.length === 0) {
    return (
      <div className="flex w-full items-center justify-center rounded-lg bg-zinc-900 px-5 py-10 text-white">
        No countries available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
      {filteredCountries.map((country, index) => (
        <Anchor
          key={index}
          className="flex items-center gap-4 rounded-lg bg-zinc-900 px-5 py-4"
          href="#"
        >
          <Image src={country.flag} width={26} height={26} alt={country.name} />
          <span className="flex-1">{country.name}</span>
          <IconArrowRight size={24} color="white" />
        </Anchor>
      ))}
    </div>
  );
};
