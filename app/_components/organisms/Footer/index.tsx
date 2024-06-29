import Image from "next/image";

// atoms
import { Anchor, Typography } from "@/app/_components/atoms";

export const Footer = () => {
  return (
    <footer className="full-width bg-zinc-200 pb-10 pt-20">
      <div className="lg:grid-rows-auto lg:grid lg:grid-flow-row lg:grid-cols-5">
        <div className="mb-20 max-w-[480px] lg:col-span-2">
          <Image
            src="/simhub-logo-dark.svg"
            alt="SimHub Logo"
            width={166}
            height={24}
            className="mb-5"
            placeholder="blur"
            blurDataURL="/simhub-logo-light.svg"
          />

          <Typography as="body5" className="mb-8 text-zinc-600">
            SimHub provide the best and tailor-made eSIM plan for your seamless
            and joyful traveling experience.
          </Typography>

          <div>
            <Typography as="body7" className="mb-5 text-zinc-600">
              Supported payments
            </Typography>

            <div className="flex items-center gap-6">
              <div className="relative h-7 w-20">
                <Image
                  src="/mastercard.png"
                  alt="Mastercard"
                  fill
                  placeholder="blur"
                  blurDataURL="/mastercard.png"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="relative h-7 w-20">
                <Image
                  src="/paypal.png"
                  alt="paypal"
                  fill
                  placeholder="blur"
                  blurDataURL="/paypal.png"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="relative h-7 w-20">
                <Image
                  src="/visa.png"
                  alt="visa"
                  fill
                  placeholder="blur"
                  blurDataURL="/visa.png"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-y-14 lg:col-span-3 lg:grid-cols-3">
          <div>
            <Typography
              as="body5"
              className="mb-5 font-semibold uppercase text-zinc-800"
            >
              About
            </Typography>

            <div className="flex flex-col gap-3">
              <Anchor href="#" className="font-normal text-zinc-600">
                Destination
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-600">
                How it works
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-600">
                Device compatibility
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-600">
                Become an affiliate
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-600">
                Blog
              </Anchor>
            </div>
          </div>

          <div>
            <Typography
              as="body5"
              className="mb-5 font-semibold uppercase text-zinc-800"
            >
              Help & Support
            </Typography>

            <div className="flex flex-col gap-3">
              <Anchor href="#" className="font-normal text-zinc-600">
                Contact Us
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-600">
                Privacy Policy
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-600">
                Terms & Conditions
              </Anchor>
            </div>
          </div>

          <div>
            <Typography
              as="body5"
              className="mb-5 font-semibold uppercase text-zinc-800"
            >
              Social Media
            </Typography>

            <div className="flex flex-col gap-3">
              <Anchor href="#" className="font-normal text-zinc-600">
                TikTok
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-600">
                Instagram
              </Anchor>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 text-center lg:col-span-full lg:row-start-2">
          <Typography
            as="body7"
            className="pt-7 font-normal uppercase text-zinc-600"
          >
            Copyright © 2023 SimHub. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
