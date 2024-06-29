import { COUNTRIES } from "../_constants";

export const getCountryCodeBasedOnCountryUrl = (
  countryUrl: string
): string | undefined => {
  return COUNTRIES.find((country) => country.url === countryUrl)?.code;
};
