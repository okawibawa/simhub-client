import Image from "next/image";
import { IconArrowLeft } from "@tabler/icons-react";

// atoms
import { Button, Typography } from "@/app/_components/atoms";

// utils
import { capitalizeString } from "@/app/_utils";

// constants
import { OPENGRAPH_METADATA } from "@/app/_constants";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `1 GB ${capitalizeString(params.slug)} eSIM Plan Details Valid for 7 Days`,
    openGraph: {
      ...OPENGRAPH_METADATA,
      title: `1 GB ${capitalizeString(params.slug)} eSIM Plan Details Valid for 7 Days`,
    },
  };
}

export default function EsimsDetailPlan({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="full-width bg-black py-5">
      <section>
        <Typography as="body4" className="mb-6 flex items-center gap-2">
          <IconArrowLeft />
          eSIM Plans
        </Typography>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
          <div className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-5 lg:col-span-2">
            <div>
              <Typography as="body3" className="mb-4">
                Product Information
              </Typography>

              <div className="mb-6 flex items-start gap-3 rounded-lg bg-zinc-800 p-4">
                <Image
                  src="/alert-tip.svg"
                  alt="alert-tip"
                  width={24}
                  height={24}
                />

                <Typography as="body5" className="text-zinc-400">
                  In Taiwan, Hong Kong, and Hong Kong/Macau; when using eSIM
                  Traveler,{" "}
                  <span className="font-semibold text-white">
                    authentication is required
                  </span>
                  .
                </Typography>
              </div>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-accessible"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.051 6.844a1 1 0 0 0 -1.152 -.663l-.113 .03l-2.684 .895l-2.684 -.895l-.113 -.03a1 1 0 0 0 -.628 1.884l.109 .044l2.316 .771v.976l-1.832 2.75l-.06 .1a1 1 0 0 0 .237 1.21l.1 .076l.101 .06a1 1 0 0 0 1.21 -.237l.076 -.1l1.168 -1.752l1.168 1.752l.07 .093a1 1 0 0 0 1.653 -1.102l-.059 -.1l-1.832 -2.75v-.977l2.316 -.771l.109 -.044a1 1 0 0 0 .524 -1.221zm-3.949 -4.184a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z" />
                    </svg>
                  </div>

                  <div>
                    <Typography as="body5" className="text-zinc-50">
                      Provider
                    </Typography>

                    <Typography as="body5" className="text-zinc-400">
                      Claro/Telefonica
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-building-broadcast-tower"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 10a2 2 0 0 1 1.497 3.327l2.452 7.357a1 1 0 1 1 -1.898 .632l-.44 -1.316h-3.224l-.438 1.317a1 1 0 0 1 -1.152 .663l-.113 -.03a1 1 0 0 1 -.633 -1.265l2.452 -7.357a2 2 0 0 1 -.503 -1.328l.005 -.15a2 2 0 0 1 1.995 -1.85" />
                      <path d="M18.093 4.078a10 10 0 0 1 3.137 11.776a1 1 0 0 1 -1.846 -.77a8 8 0 1 0 -14.769 0a1 1 0 0 1 -1.846 .77a10 10 0 0 1 15.324 -11.776" />
                      <path d="M15.657 7.243a6 6 0 0 1 1.882 7.066a1 1 0 1 1 -1.846 -.77a4 4 0 1 0 -7.384 0a1 1 0 1 1 -1.846 .77a6 6 0 0 1 9.194 -7.066" />
                    </svg>
                  </div>

                  <div>
                    <Typography as="body5" className="text-zinc-50">
                      Network
                    </Typography>

                    <Typography as="body5" className="text-zinc-400">
                      3G/LTE
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-credit-card"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 10v6a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-6h20zm-14.99 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2zm5.99 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0 -2zm5 -10a4 4 0 0 1 4 4h-20a4 4 0 0 1 4 -4h12z" />
                    </svg>
                  </div>

                  <div>
                    <Typography as="body5" className="text-zinc-50">
                      Supported
                    </Typography>

                    <Typography as="body5" className="text-zinc-400">
                      Data only (no calls)
                    </Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-message-chatbot"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" />
                    </svg>
                  </div>

                  <div>
                    <Typography as="body5" className="text-zinc-50">
                      eKYC
                    </Typography>

                    <Typography as="body5" className="text-zinc-400">
                      Domestic/Local registration (available)
                    </Typography>
                  </div>
                </div>
              </div>

              <div>
                <Typography as="body5" className="text-zinc-50">
                  - Enjoy your trip with Unlimited data
                </Typography>
                <Typography as="body5" className="text-zinc-50">
                  - You can use all social media without VPN
                </Typography>
                <Typography as="body5" className="mb-4 text-zinc-50">
                  - Eligibility period and data begin in 24 hours from the time
                  you activate your eSIM following registration
                </Typography>

                <Typography as="body5" className="text-zinc-400">
                  *You will receive a QR code immediately after you make a
                  purchase using your registered email address. To activate it,
                  you can scan the QR code with your smartphone and it will be
                  ready in a matter of minutes.
                </Typography>
              </div>
            </div>

            <div>
              <Typography as="body3" className="mb-4">
                Instructions
              </Typography>

              <Typography as="body5" className="text-zinc-50">
                - Before making a purchase, make sure your device supports eSIM
                services and has 5G capability.
              </Typography>
              <Typography as="body5" className="text-zinc-50">
                - Ensure you have an available internet connection, either
                through Wi-Fi or your physical SIM card.
              </Typography>
              <Typography as="body5" className="text-zinc-50">
                - For iPhone users: Open Settings - Cellular - Add eSIM.
              </Typography>
              <Typography as="body5" className="text-zinc-50">
                - For Android users: Open Settings - Connections - SIM Manager -
                Add eSIM.
              </Typography>
              <Typography as="body5" className="mb-4 text-zinc-50">
                - Wait for the installation process to complete and the
                notification to be received.
              </Typography>

              <Typography as="body5" className="text-zinc-400">
                Experience better and faster internet speeds with 5G e-SIM!
                Activate it now and enjoy the convenience.
              </Typography>
            </div>

            <div>
              <Typography as="body3" className="mb-4">
                Policy
              </Typography>

              <Typography as="body5" className="text-zinc-50">
                - The eSIM includes unlimited data for the contracted time.
                However, please note that the carrier may reserve the right to
                apply a Fair Usage Policy.
              </Typography>
              <Typography as="body5" className="text-zinc-50">
                - The check-in (purchase confirmation) period is 180 days from
                the date of product purchase, and you can apply for a refund
                during this period.
              </Typography>
              <Typography as="body5" className="text-zinc-50">
                - Exchanges/refunds are not possible after check-in (purchase
                confirmation).
              </Typography>
            </div>
          </div>

          <div className="row-start-1 h-fit rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-5  lg:col-start-3 lg:row-start-auto">
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
                  Validity
                </Typography>
                <Typography as="body4">7 days</Typography>
              </div>

              <div>
                <Typography as="body5" className="mb-1 text-zinc-500">
                  Data
                </Typography>
                <Typography as="body4">Unlimited</Typography>
              </div>
            </div>

            <Button variant="primary" className="my-t w-full">
              Continue to Payment
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
