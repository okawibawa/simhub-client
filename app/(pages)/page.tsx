// sections
import {
  HeroSection,
  DestinationCountriesSection,
  AdvantagesSection,
  GuideSection,
} from "@/app/_components/sections/Home";

export default async function Home() {
  return (
    <main className="h-dvh">
      <HeroSection />
      <DestinationCountriesSection />
      <AdvantagesSection />
      <GuideSection />
    </main>
  );
}
