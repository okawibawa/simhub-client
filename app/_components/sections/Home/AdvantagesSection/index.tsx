import Image from "next/image";

// constants
import { ADVANTAGES } from "@/app/_constants";

// atoms
import { Typography } from "@/app/_components/atoms/Typography";

export const AdvantagesSection = () => {
  return (
    <section className="full-width bg-black py-24">
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-5 md:gap-y-0 lg:grid-cols-4">
        {ADVANTAGES.map((advantage) => (
          <div
            key={advantage.title}
            className="mx-auto max-w-[320px] text-center"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gray-500 bg-gray-800">
              <Image
                src={advantage.icon}
                alt={advantage.title}
                width={36}
                height={36}
                className="mx-auto"
              />
            </div>
            <Typography as="body4" className="mb-4 font-semibold">
              {advantage.title}
            </Typography>
            <Typography as="body5" className="text-zinc-500">
              {advantage.description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};
