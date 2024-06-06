"use client";

import { IconArrowLeft } from "@tabler/icons-react";

// atoms
import { Typography } from "@/app/_components/atoms";

// sections
import { CheckoutSection } from "@/app/_components/sections/Checkout";

// stores
import { useNavigationHeightStore } from "@/app/_stores";

export default function CheckoutEsim() {
  const { navigationBarHeight } = useNavigationHeightStore();

  return (
    <main
      className={`full-width bg-black py-5`}
      style={{ minHeight: `calc(100vh - ${navigationBarHeight}px)` }}
    >
      <section>
        <Typography as="body4" className="mb-6 flex h-fit items-center gap-2">
          <IconArrowLeft />
          eSIM Plan Details
        </Typography>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <CheckoutSection />
        </div>
      </section>
    </main>
  );
}
