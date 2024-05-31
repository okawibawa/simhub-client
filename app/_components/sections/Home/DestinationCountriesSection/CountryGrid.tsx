// atoms
import { readFile } from "fs/promises";
import { CountryCard } from "./CountryCards";

export const CountryGrid = async () => {
  const countries = await readFile("./countries.json", "utf8");

  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
      <CountryCard countries={JSON.parse(countries)} />
    </div>
  );
};
