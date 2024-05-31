// atoms
import { readFile } from "fs/promises";
import { CountryCard } from "./CountryCards";

export const CountryGrid = async () => {
  const countries = await readFile("./countries.json", "utf8");

  return (
    <>
      <CountryCard countries={JSON.parse(countries)} />
    </>
  );
};
