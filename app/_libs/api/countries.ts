import {
  ApiError,
  InternalServerError,
  isApiError,
  isUnauthorizedError,
  UnauthorizedError,
} from "../../_utils";

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${process.env.HOST_API_URL}/countries`, {
      next: {
        revalidate: 60 * 60 * 24,
      },
    });

    if (!response.ok && response.status === 401) {
      throw UnauthorizedError(response.status, "Unauthorized");
    }

    if (!response.ok) {
      throw ApiError(response.status, "Error fetching countries");
    }

    return await response.json();
  } catch (error: unknown) {
    if (isApiError(error)) {
      throw error;
    }

    if (isUnauthorizedError(error)) {
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
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    );

    const result = await response.json();

    if (!result.ok) {
      throw ApiError(response.status, "Error fetching countries");
    }

    return result;
  } catch (error: unknown) {
    if (isApiError(error)) {
      throw error;
    }

    throw InternalServerError;
  }
};
