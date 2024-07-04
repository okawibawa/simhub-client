import { ApiError, InternalServerError, isApiError } from "../../_utils";

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${process.env.HOST_API_URL}/countries`);

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

export const fetchCountriesBySearchQuery = async (countryName: string) => {
  const payload = new FormData();

  payload.append("name", countryName);

  try {
    const response = await fetch(
      `${process.env.HOST_API_URL}/countries/search`,
      {
        method: "POST",
        body: payload,
      }
    );

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
