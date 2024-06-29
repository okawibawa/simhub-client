"use client";

import Link from "next/link";

// atoms
import { Button, Typography } from "@/app/_components/atoms";

import { buttonVariants } from "@/app/_types/cva";

import { useEsimPlansFilterHook } from "@/app/_hooks";

import { esimPlansEntity } from "@/app/_types/entities/esimPlans";

import {
  capitalizeString,
  cn,
  formatNumberToCurrency,
  getCountryUrlBasedOnCountryCode,
} from "@/app/_utils";

export const PlanCard = ({
  esimPlans,
  slug,
}: {
  esimPlans: esimPlansEntity[];
  slug: string;
}) => {
  const { planType } = useEsimPlansFilterHook();

  return (
    <>
      {esimPlans
        .filter((esimPlan) => esimPlan.type === planType)
        .map((esimPlan) => (
          <div
            key={esimPlan.id}
            className="relative flex flex-col gap-5 rounded-lg bg-blue-500 px-6 pb-4 pt-12 text-white shadow-lg shadow-blue-400/50"
          >
            <div className="absolute -left-2 top-3 rounded-r bg-[linear-gradient(90deg,_#E34614_-11.05%,_#E60E76_111.05%)] px-2 py-1">
              <Typography as="body7" className="text-zinc-50">
                {capitalizeString(esimPlan.plan)} Plan
              </Typography>

              <div className="absolute left-0 top-[26px] h-2 w-2 rounded-bl-lg bg-red-500 bg-[linear-gradient(180deg,_#67190A_111.05%,_#E44020_-11.05%)]" />
            </div>

            <Typography as="body3" className="text-zinc-50">
              {capitalizeString(esimPlan.name)} eSIM Plan
            </Typography>

            <div className="divide-y-[.5px] divide-zinc-50">
              <div className="flex items-center gap-3 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="rgb(228 228 231)"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                </svg>
                <Typography as="body5" className="flex-1 text-zinc-200">
                  Coverage
                </Typography>
                <Typography as="body5" className="font-medium text-zinc-50">
                  {capitalizeString(esimPlan.name)}
                </Typography>
              </div>

              <div className="flex items-center gap-3 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="rgb(228 228 231)"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-calendar"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z" />
                  <path d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
                </svg>
                <Typography as="body5" className="flex-1 text-zinc-200">
                  Validity
                </Typography>
                <Typography as="body5" className="text-zinc-100">
                  {esimPlan.duration_in_days} days
                </Typography>
              </div>

              <div className="flex items-center gap-3 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="rgb(228 228 231)"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-chart-donut"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9.883 2.207a1.9 1.9 0 0 1 2.087 1.522l.025 .167l.005 .104v4a1 1 0 0 1 -.641 .933l-.107 .035a3.1 3.1 0 1 0 3.73 3.953l.05 -.173a1 1 0 0 1 .855 -.742l.113 -.006h3.8a2 2 0 0 1 2 2a1 1 0 0 1 -.026 .226a10 10 0 1 1 -12.27 -11.933l.27 -.067l.11 -.02z" />
                  <path d="M14.775 2.526a.996 .996 0 0 1 .22 -.026l.122 .007l.112 .02l.103 .03a10 10 0 0 1 6.003 5.817l.108 .294a1 1 0 0 1 -.824 1.325l-.119 .007h-4.5a1 1 0 0 1 -.76 -.35a8 8 0 0 0 -.89 -.89a1 1 0 0 1 -.342 -.636l-.008 -.124v-4.495l.006 -.118c.005 -.042 .012 -.08 .02 -.116l.03 -.103a.998 .998 0 0 1 .168 -.299l.071 -.08c.03 -.028 .058 -.052 .087 -.075l.09 -.063l.088 -.05l.103 -.043l.112 -.032z" />
                </svg>
                <Typography as="body5" className="flex-1 text-zinc-200">
                  Data
                </Typography>
                <Typography as="body5" className="text-zinc-100">
                  {esimPlan.data_amount}
                  {esimPlan.data_unit.toUpperCase()}
                </Typography>
              </div>

              <div className="flex items-center gap-3 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="rgb(228 228 231)"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-coin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -1 1a3 3 0 1 0 0 6v2a1.024 1.024 0 0 1 -.866 -.398l-.068 -.101a1 1 0 0 0 -1.732 .998a3 3 0 0 0 2.505 1.5h.161a1 1 0 0 0 .883 .994l.117 .007a1 1 0 0 0 1 -1l.176 -.005a3 3 0 0 0 -.176 -5.995v-2c.358 -.012 .671 .14 .866 .398l.068 .101a1 1 0 0 0 1.732 -.998a3 3 0 0 0 -2.505 -1.501h-.161a1 1 0 0 0 -1 -1zm1 7a1 1 0 0 1 0 2v-2zm-2 -4v2a1 1 0 0 1 0 -2z" />
                </svg>
                <Typography as="body5" className="flex-1 text-zinc-200">
                  Price
                </Typography>
                <Typography as="body5" className="text-zinc-100">
                  {formatNumberToCurrency(parseFloat(esimPlan.price_in_usd))}
                </Typography>
              </div>
            </div>

            <Link
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "w-full text-center outline-white hover:bg-blue-600"
              )}
              href={`/esims/${getCountryUrlBasedOnCountryCode(slug)}/plan-details/${esimPlan.id}`}
            >
              Purchase
            </Link>
          </div>
        ))}{" "}
    </>
  );
};
