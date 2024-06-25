import Image from "next/image";

// constants
import { OPENGRAPH_METADATA } from "@/app/_constants";

// atoms
import { Typography } from "@/app/_components/atoms";

// organisms
import { Guide, Cta } from "@/app/_components/organisms";

// sections
import { PlansSection } from "@/app/_components/sections/Esims";

// utils
import {
  capitalizeString,
  getCountryNameBasedOnCountryUrl,
} from "@/app/_utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `${capitalizeString(params.slug)} eSIM Plans`,
    openGraph: {
      ...OPENGRAPH_METADATA,
      title: `${capitalizeString(params.slug)} eSIM Plans`,
    },
  };
}

export default function Esims({ params }: { params: { slug: string } }) {
  return (
    <main>
      <section className="bg-black">
        <div className="relative bottom-0 mb-6 h-[240px] max-h-[240px] w-full">
          <Image
            src="/esims-background.jpg"
            fill
            alt="Esims background"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="grid-content">
          <Typography as="subheading2" className="mb-16">
            {getCountryNameBasedOnCountryUrl(params.slug)} eSIM Plans
          </Typography>

          <div className="mb-10">
            <Typography as="body2" className="text-zinc-50">
              Recommendation for you
            </Typography>
          </div>

          <PlansSection />
        </div>
      </section>

      <Guide />
      <Cta />
    </main>
  );
}
