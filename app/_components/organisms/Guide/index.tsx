import Image from "next/image";

// atoms
import { Typography } from "@/app/_components/atoms";

// constants
import { GUIDES } from "@/app/_constants";

export const Guide = () => {
  return (
    <section
      className="full-width bg-black py-24 text-center"
      id="how-it-works"
    >
      <Typography as="subheading2" className="mb-5">
        How Our eSIM Works
      </Typography>
      <Typography as="body3" className="mb-14 text-zinc-400">
        Follow our 3-steps below on how the way eSIM will work on your device
      </Typography>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {GUIDES.map((guide) => (
          <div key={guide.title}>
            <Image
              src={guide.image}
              width={380}
              height={280}
              alt="guide one"
              className="mb-6"
            />
            <Typography as="body4" className="mb-4">
              {guide.title}
            </Typography>
            <Typography as="body5" className="text-zinc-500">
              {guide.description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};
