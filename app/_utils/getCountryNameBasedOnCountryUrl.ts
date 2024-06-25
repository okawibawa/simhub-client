import { COUNTRIES } from "../_constants";

export const getCountryNameBasedOnCountryUrl = (
  countryUrl: string
): string | undefined => {
  return COUNTRIES.find((country) => country.url === countryUrl)?.name;
};
