"use server";

import { fetchCountries } from "../_libs/api";
import { isApiError } from "../_utils";

export const countriesAction = async () => {
  try {
    return await fetchCountries();
  } catch (error) {
    if (isApiError(error)) {
      return { ok: error.ok, code: error.code, error: error.message };
    }

    return { ok: false, code: 500, error: "Something went wrong" };
  }
};
