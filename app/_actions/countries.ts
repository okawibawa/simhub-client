"use server";

import { redirect } from "next/navigation";

import { fetchCountries } from "../_libs/api";
import { isApiError, isUnauthorizedError } from "../_utils";

export const countriesAction = async () => {
  try {
    return await fetchCountries();
  } catch (error) {
    console.log(error);

    if (isApiError(error)) {
      return { ok: error.ok, code: error.code, error: error.message };
    }

    if (isUnauthorizedError(error)) {
      redirect("/login");
    }

    return { ok: false, code: 500, error: "Something went wrong" };
  }
};
