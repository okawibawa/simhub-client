"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

import { Anchor } from "@/app/_components/atoms";

import { getCountryUrlBasedOnCountryCode } from "@/app/_utils";

import { GLOBAL_COUNTRIES_CODES } from "@/app/_constants";

interface CountryData {
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}

export const CountryCards = ({ countries }: { countries: CountryData[] }) => {
  return (
    <>
      {countries?.map((country: CountryData) => (
        <Anchor
          key={country.code}
          className="flex items-center gap-4 rounded-lg bg-zinc-900 px-5 py-4"
          href={`/esims/${getCountryUrlBasedOnCountryCode(country.code)}`}
        >
          <Image
            src={`/flags/${GLOBAL_COUNTRIES_CODES.includes(country.code) ? "global" : country.code.toLowerCase()}.png`}
            width={26}
            height={26}
            alt={country.name}
          />
          <span className="flex-1">{country.name}</span>
          <IconArrowRight size={24} color="white" />
        </Anchor>
      ))}
    </>
  );
};
