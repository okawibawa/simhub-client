import { CountryCard } from "./CountryCards";

import { countriesAction } from "@/app/_actions";

export const CountryGrid = async () => {
  const countries = await countriesAction();

  return <CountryCard countries={countries} />;
};
