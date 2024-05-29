// atoms
import { readFile } from "fs/promises";
import { CountryCard } from "./CountryCards";

export const CountryGrid = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const countries = await readFile("./countries.json", "utf8");

  return (
    <>
      <CountryCard countries={JSON.parse(countries)} />
    </>
  );
};
