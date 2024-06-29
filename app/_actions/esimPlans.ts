import { fetchEsimPlans } from "../_libs/api";
import { isApiError } from "../_utils";

export const esimPlansAction = async ({
  countryCode,
}: {
  countryCode: string;
}) => {
  try {
    return await fetchEsimPlans(countryCode);
  } catch (error) {
    if (isApiError(error)) {
      return { ok: error.ok, code: error.code, error: error.message };
    }

    return { ok: false, code: 500, error: "Something went wrong" };
  }
};
