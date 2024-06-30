// organisms
import { Cta, Guide } from "@/app/_components/organisms";

// sections
import {
  HeroSection,
  DestinationCountriesSection,
  AdvantagesSection,
  ReviewSection,
} from "@/app/_components/sections/Home";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <DestinationCountriesSection />
      <AdvantagesSection />
      <Guide />
      <ReviewSection />
      <Cta />
    </main>
  );
}
