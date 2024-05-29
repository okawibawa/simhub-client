import { Suspense } from "react";
import Image from "next/image";

// atoms
import { Typography } from "@/app/_components/atoms";

// organisms
import { CountrySearch } from "@/app/_components/organisms";

// sections
import { Countries } from "@/app/_components/sections";
import { CountryTabs } from "@/app/_components/sections/Home/Countries/CountryTabs";

import Loading from "./loading";

export default async function Home() {
  return (
    <main className="h-dvh">
      <section className="relative flex h-full max-h-[420px] w-full place-content-center items-center justify-center md:max-h-[520px]">
        <Image
          src="/home-page-hero.jpg"
          fill
          objectFit="cover"
          className="absolute -z-10"
          alt="simhub hero image"
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

      <section className="grid-content full-width bg-black py-24">
        <Typography as="body3" className="mb-2">
          Connect Globally and Seamlessly
        </Typography>
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <Typography as="subheading2" className="mb-10 md:mb-0">
            Explore the Most Exciting Destinations
          </Typography>

          <CountryTabs />
        </div>

        <Suspense fallback={<Loading />}>
          <Countries />
        </Suspense>
      </section>
    </main>
  );
}
