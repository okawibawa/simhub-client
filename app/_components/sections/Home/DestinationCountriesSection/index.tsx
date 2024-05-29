// atoms
import { Typography } from "@/app/_components/atoms";

import { CountryGrid } from "./CountryGrid";
import { CountryTabs } from "./CountryTabs";
import { Suspense } from "react";

import Loading from "@/app/_components/sections/Home/DestinationCountriesSection/loading";

export const DestinationCountriesSection = async () => {
  return (
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
        <CountryGrid />
      </Suspense>
    </section>
  );
};
