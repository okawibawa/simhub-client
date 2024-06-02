import { IconArrowLeft } from "@tabler/icons-react";

// atoms
import { Button, Typography } from "@/app/_components/atoms";

// utils
import { capitalizeString } from "@/app/_utils";

export default function EsimsDetailPlan({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="full-width h-full bg-black py-5">
      <Typography as="body4" className="mb-6 flex items-center gap-2">
        <IconArrowLeft />
        Your Purchase
      </Typography>

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div className="h-[500px] rounded-xl bg-zinc-900 px-4 py-5 lg:col-span-2">
          left
        </div>

        <div className="row-start-1 h-fit rounded-xl bg-zinc-900 px-4 py-5 lg:col-start-3 lg:row-start-auto">
          <Typography as="body3" className="mb-2">
            {capitalizeString(params.slug)} eSIM Plan
          </Typography>
          <Typography as="body1">$22</Typography>

          <div className="my-4 h-[1px] w-full bg-zinc-700" />

          <div className="mb-4 grid grid-cols-3 gap-4">
            <div>
              <Typography as="body5" className="mb-1 text-zinc-500">
                Coverage
              </Typography>
              <Typography as="body4">13 Countries</Typography>
            </div>

            <div>
              <Typography as="body5" className="mb-1 text-zinc-500">
                Coverage
              </Typography>
              <Typography as="body4">13 Countries</Typography>
            </div>

            <div>
              <Typography as="body5" className="mb-1 text-zinc-500">
                Coverage
              </Typography>
              <Typography as="body4">13 Countries</Typography>
            </div>
          </div>

          <Button variant="primary" className="my-4 w-full">
            Continue to Payment
          </Button>
        </div>
      </div>
    </main>
  );
}
