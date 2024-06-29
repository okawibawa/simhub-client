import React from "react";
import Image from "next/image";

import HeroDestinationOne from "../../../../../public/hero-dest-1.png";
import HeroDestinationTwo from "../../../../../public/hero-dest-2.png";

// atoms
import { Typography } from "@/app/_components/atoms";

// organisms
import { CountrySearch } from "@/app/_components/organisms";

export const HeroSection = () => {
  return (
    <section className="grid-content mt-[78px] h-fit w-full place-items-center md:h-screen md:max-h-[520px]">
      <div className="flex h-full w-full flex-col-reverse items-center md:flex-row md:justify-between">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <Typography as="headline" className="mb-8 max-w-[580px]">
            Your Digital Gateway to Seamless Connectivity
          </Typography>

          <CountrySearch />

          <Typography as="body4" className="font-medium text-zinc-600">
            Cover your trip over 150+ countries with our global eSIM
          </Typography>
        </div>

        <div className="hidden md:relative md:block md:h-full md:w-1/2">
          <Image
            src={HeroDestinationOne}
            alt="hero-dest-1"
            width={256}
            height={256}
            placeholder="blur"
            className="absolute right-1/2 top-2/3 -translate-y-1/2 translate-x-1/2 -skew-x-1 shadow-2xl"
          />
          <Image
            src={HeroDestinationTwo}
            alt="hero-dest-2"
            width={256}
            height={256}
            placeholder="blur"
            className="absolute left-1/2 top-2/4 -z-[2] -translate-x-1/2 -translate-y-1/2 -skew-x-1 shadow-2xl md:left-2/3"
          />
        </div>

        <div className="absolute left-0 right-0 -z-10 h-screen w-full">
          <Image
            src="/hero-blob.png"
            alt="hero-blob"
            // width={512}
            // height={512}
            fill
          />
        </div>
      </div>
    </section>
  );
};
