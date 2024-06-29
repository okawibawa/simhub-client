import { fetchEsimPlans } from "../_libs/api";
import { isApiError } from "../_utils";

export const esimPlansAction = async () => {
  try {
    return await fetchEsimPlans("JP");
  } catch (error) {
    if (isApiError(error)) {
      return { ok: error.ok, code: error.code, error: error.message };
    }

    return { error: "Something went wrong" };
  }
};
