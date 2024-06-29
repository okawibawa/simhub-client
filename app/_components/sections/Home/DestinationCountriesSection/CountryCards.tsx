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
        <div className="relative" key={country.code}>
          <Anchor
            className="relative z-10 flex h-full items-center gap-4 rounded-lg bg-white/20 px-5 py-4 backdrop-blur-sm"
            href={`/esims/${getCountryUrlBasedOnCountryCode(country.code)}`}
          >
            <Image
              src={`/flags/${GLOBAL_COUNTRIES_CODES.includes(country.code) ? "global" : country.code.toLowerCase()}.png`}
              width={26}
              height={26}
              alt={country.name}
            />
            <span className="flex-1 font-semibold text-white">
              {country.name}
            </span>
            <IconArrowRight size={24} color="white" />
          </Anchor>

          <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-800/60" />
        </div>
      ))}
    </>
  );
};
