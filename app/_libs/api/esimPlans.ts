import { ApiError, InternalServerError, isApiError } from "../../_utils";

export const fetchEsimPlans = async (countryCode: string) => {
  try {
    const response = await fetch(
      `${process.env.HOST_API_URL}/esims/${countryCode}`,
      {
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    );

    if (!response.ok) {
      throw ApiError(response.status, "Error fetching eSIM plans");
    }

    return await response.json();
  } catch (error) {
    if (isApiError(error)) {
      throw error;
    }

    throw InternalServerError;
  }
};

export const fetchEsimPlanById = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.HOST_API_URL}/esims/plan-details/${id}`,
      {
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    );

    if (!response.ok) {
      throw ApiError(response.status, "Error fetching eSIM plan details");
    }

    return await response.json();
  } catch (error) {
    if (isApiError(error)) {
      throw error;
    }

    throw InternalServerError;
  }
};
