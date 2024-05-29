import React from "react";
import Image from "next/image";

// atoms
import { Typography } from "@/app/_components/atoms";

// organisms
import { CountrySearch } from "@/app/_components/organisms";

export const HeroSection = () => {
  return (
    <section className="relative flex h-screen max-h-[420px] w-full place-content-center items-center justify-center md:max-h-[520px]">
      <Image
        src="/home-page-hero.jpg"
        fill
        className="absolute -z-10"
        alt="simhub hero image"
        style={{
          objectFit: "cover",
        }}
      />

      <div className="grid-content text-center">
        <Typography as="headline" className="mx-auto mb-8 max-w-[580px]">
          Your Digital Gateway to Seamless Connectivity
        </Typography>

        <CountrySearch />

        <Typography as="body4" className="font-medium text-zinc-300">
          Cover your trip over 150+ countries with our global eSIM
        </Typography>
      </div>
    </section>
  );
};
