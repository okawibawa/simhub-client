import { readFile } from "fs/promises";
import { Suspense } from "react";

// atoms
import { CountryGrid } from "./CountryGrid";

export const Countries = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const countries = await readFile("./countries.json", "utf8");

  return <CountryGrid countries={JSON.parse(countries)} />;
};
