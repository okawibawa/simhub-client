import { Suspense } from "react";

// atoms
import { Typography } from "@/app/_components/atoms";

// sections
import {
  DestinationCountriesSection,
  HeroSection,
} from "@/app/_components/sections/Home";
// import { CountryTabs } from "@/app/_components/sections/Home/Countries/CountryTabs";

import Loading from "../_components/sections/Home/DestinationCountriesSection/loading";

export default async function Home() {
  return (
    <main className="h-dvh">
      <HeroSection />
      <DestinationCountriesSection />
    </main>
  );
}
