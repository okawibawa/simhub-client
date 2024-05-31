// organisms
import { Cta } from "@/app/_components/organisms";

// sections
import {
  HeroSection,
  DestinationCountriesSection,
  AdvantagesSection,
  GuideSection,
  ReviewSection,
} from "@/app/_components/sections/Home";

export default async function Home() {
  return (
    <main className="h-full">
      <HeroSection />
      <DestinationCountriesSection />
      <AdvantagesSection />
      <GuideSection />
      <ReviewSection />
      <Cta />
    </main>
  );
}
