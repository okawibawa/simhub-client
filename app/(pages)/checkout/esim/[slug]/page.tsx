import { IconArrowLeft } from "@tabler/icons-react";

// atoms
import { Typography } from "@/app/_components/atoms";

// sections
import { CheckoutSection } from "@/app/_components/sections/Checkout";

export default function CheckoutEsim({ params }: { params: { slug: string } }) {
  return (
    <main className="full-width h-full bg-black py-5">
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
