import Image from "next/image";

// atoms
import { Typography } from "@/app/_components/atoms";

// constants
import { REVIEWS } from "@/app/_constants";

export const ReviewSection = () => {
  return (
    <section className="full-width bg-zinc-100 py-24 text-center">
      <Typography as="subheading2" className="mb-14">
        Story from our beloved customers
      </Typography>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {REVIEWS.map((review) => (
          <div
            key={review.name}
            className="relative z-10 flex h-full flex-col rounded-lg bg-blue-600/80 px-5 py-4 backdrop-blur-sm"
          >
            <Typography
              as="body5"
              className="mb-6 flex-1 text-left text-zinc-50"
            >
              {review.review}
            </Typography>

            <div className="flex items-center gap-x-2">
              <Image
                src={review.image}
                alt={review.name}
                className="rounded-full"
                width={24}
                height={24}
              />
              <Typography as="body5" className="text-zinc-100">
                {review.name}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
