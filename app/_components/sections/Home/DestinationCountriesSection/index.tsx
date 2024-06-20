// atoms
import { Typography } from "@/app/_components/atoms";

import { CountryGrid } from "./CountryGrid";
import { CountryTabs } from "./CountryTabs";
import { Suspense } from "react";

import Loading from "@/app/_components/sections/Home/DestinationCountriesSection/loading";

export const DestinationCountriesSection = async () => {
  return (
    <section className="full-width bg-black py-24" id="destination">
      <Typography as="body3" className="mb-2">
        Connect Globally and Seamlessly
      </Typography>
      <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <Typography as="subheading2" className="mb-10 lg:mb-0">
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
