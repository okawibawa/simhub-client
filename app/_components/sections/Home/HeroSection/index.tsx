import React from "react";
import Image from "next/image";

// atoms
import { Typography } from "@/app/_components/atoms";

// organisms
import { CountrySearch } from "@/app/_components/organisms";

export const HeroSection = () => {
  return (
    <section className="grid-content h-screen max-h-[420px] w-full place-items-center md:max-h-[520px]">
      {/* <Image
        src="/home-page-hero.jpg"
        fill
        className="absolute -z-10"
        alt="simhub hero image"
        priority={true}
        style={{
          objectFit: "cover",
        }}
      /> */}

      <div className="flex h-full w-full items-center justify-between">
        <div>
          <Typography as="headline" className="mb-8 max-w-[580px]">
            Your Digital Gateway to Seamless Connectivity
          </Typography>

          <CountrySearch />

          <Typography as="body4" className="font-medium text-zinc-600">
            Cover your trip over 150+ countries with our global eSIM
          </Typography>
        </div>

        <div className="absolute right-0 h-screen w-full">
          <Image
            src="/hero-blob.png"
            alt="hero-blob"
            // width={512}
            // height={512}
            fill
            className="top-0 -z-10"
          />
        </div>
      </div>
    </section>
  );
};
