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
    </main>
  );
}
