"use server";

import { fetchCountriesBySearchQuery } from "../_libs/api";
import { isApiError } from "../_utils";

export const countriesSearchAction = async (countryName: string) => {
  try {
    return await fetchCountriesBySearchQuery(countryName);
  } catch (error) {
    if (isApiError(error)) {
      return { ok: error.ok, code: error.code, error: error.message };
    }

    return { ok: false, code: 500, error: "Something went wrong" };
  }
};
