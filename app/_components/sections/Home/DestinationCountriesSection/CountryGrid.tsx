import { countriesAction } from "@/app/_actions";
import { CountryCards } from "./CountryCards";

export const CountryGrid = async () => {
  const countries = await countriesAction();

  if (!countries.ok && countries.code > 300) {
    return (
      <div className="w-full rounded-lg bg-zinc-900 px-5 py-10 text-center text-white">
        We are having some issues fetching eSIM plans. Please try again later or
        contact support.
      </div>
    );
  }

  if (countries.ok && countries.data && countries.data.length === 0) {
    return (
      <div className="w-full rounded-lg bg-zinc-900 px-5 py-10 text-center text-white">
        No countries available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
      <CountryCards countries={countries.data} />
    </div>
  );
};
