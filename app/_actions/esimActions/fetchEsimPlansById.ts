"use server";

import { fetchEsimPlanById as fetchEsimPlanByIdApi } from "@/app/_libs/api";
import { isApiError } from "../../_utils";

export const fetchEsimPlanById = async ({ id }: { id: number }) => {
  try {
    return await fetchEsimPlanByIdApi(id);
  } catch (error) {
    if (isApiError(error)) {
      return { ok: error.ok, code: error.code, error: error.message };
    }

    return { ok: false, code: 500, error: "Something went wrong" };
  }
};
