// organisms
import { Cta, Guide } from "@/app/_components/organisms";

// sections
import {
  HeroSection,
  DestinationCountriesSection,
  AdvantagesSection,
  ReviewSection,
} from "@/app/_components/sections/Home";

export default async function Home() {
  return (
    <main className="h-full">
      <HeroSection />
      <DestinationCountriesSection />
      <AdvantagesSection />
      <Guide />
      <ReviewSection />
      <Cta />
    </main>
  );
}
