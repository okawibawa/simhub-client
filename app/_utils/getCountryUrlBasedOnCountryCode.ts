import { COUNTRIES } from "../_constants";

export const getCountryUrlBasedOnCountryCode = (
  countryCode: string
): string | undefined => {
  return COUNTRIES.find((country) => country.code === countryCode)?.url;
};
