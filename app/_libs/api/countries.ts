import { ApiError, InternalServerError, isApiError } from "../../_utils";

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${process.env.HOST_API_URL}/countries`);

    console.log({ response });

    if (!response.ok) {
      throw ApiError(response.status, "Error fetching countries");
    }

    return await response.json();
  } catch (error: unknown) {
    if (isApiError(error)) {
      throw error;
    }

    throw InternalServerError;
  }
};
