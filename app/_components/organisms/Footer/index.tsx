import Image from "next/image";

// atoms
import { Anchor, Typography } from "@/app/_components/atoms";

export const Footer = () => {
  return (
    <footer className="full-width bg-black pb-10 pt-20">
      <div className="lg:grid-rows-auto lg:grid lg:grid-flow-row lg:grid-cols-5">
        <div className="mb-20 max-w-[480px] lg:col-span-2">
          <Image
            src="/simhub-logo-light.svg"
            alt="SimHub Logo"
            width={166}
            height={24}
            className="mb-5"
          />

          <Typography as="body5" className="mb-8 text-zinc-400">
            SimHub provide electronic SIM (eSIM) for customers who want to
            travel around the world with super hassle-free & affordable
            connectivity
          </Typography>

          <div>
            <Typography as="body7" className="mb-5 text-zinc-400">
              Supported payments
            </Typography>

            <div className="flex items-center gap-6">
              <div className="relative h-7 w-20">
                <Image
                  src="/mastercard.png"
                  alt="Mastercard"
                  fill
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
              className="mb-5 font-semibold uppercase text-white"
            >
              About
            </Typography>

            <div className="flex flex-col gap-3">
              <Anchor href="#" className="font-normal text-zinc-400">
                Destination
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-400">
                How it works
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-400">
                Device compatibility
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-400">
                Become an affiliate
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-400">
                Blog
              </Anchor>
            </div>
          </div>

          <div>
            <Typography
              as="body5"
              className="mb-5 font-semibold uppercase text-white"
            >
              Help & Support
            </Typography>

            <div className="flex flex-col gap-3">
              <Anchor href="#" className="font-normal text-zinc-400">
                Contact Us
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-400">
                Privacy Policy
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-400">
                Terms & Conditions
              </Anchor>
            </div>
          </div>

          <div>
            <Typography
              as="body5"
              className="mb-5 font-semibold uppercase text-white"
            >
              Social Media
            </Typography>

            <div className="flex flex-col gap-3">
              <Anchor href="#" className="font-normal text-zinc-400">
                TikTok
              </Anchor>
              <Anchor href="#" className="font-normal text-zinc-400">
                Instagram
              </Anchor>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 text-center lg:col-span-full lg:row-start-2">
          <Typography
            as="body7"
            className="pt-7 font-normal uppercase text-zinc-400"
          >
            Copyright © 2023 SimHub. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
