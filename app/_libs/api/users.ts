import {
  ApiError,
  InternalServerError,
  isApiError,
  isUnauthorizedError,
  UnauthorizedError,
} from "../../_utils";

export const updateUser = async (data: FormData) => {
  try {
    const payload = Object.fromEntries(data);
    const id = payload.id;

    data.delete("id");

    const response = await fetch(`${process.env.HOST_API_URL}/users/${id}`, {
      method: "PUT",
      credentials: "include",
      body: data,
      next: {
        revalidate: 60 * 60 * 24,
      },
    });

    if (!response.ok && response.status === 401) {
      throw UnauthorizedError(response.status, "Unauthorized");
    }

    if (!response.ok) {
      throw ApiError(response.status, "Error updating user");
    }

    return await response.json();
  } catch (error) {
    if (isApiError(error)) {
      throw error;
    }

    if (isUnauthorizedError(error)) {
      throw error;
    }

    throw InternalServerError;
  }
};

export const logoutUser = async (data: FormData) => {
  try {
    const response = await fetch(`${process.env.HOST_API_URL}/auth/sign-out`, {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (!response.ok && response.status === 401) {
      throw UnauthorizedError(response.status, "Unauthorized");
    }

    if (!response.ok) {
      throw ApiError(response.status, "Error updating user");
    }

    return await response.json();
  } catch (error) {
    if (isApiError(error)) {
      throw error;
    }

    if (isUnauthorizedError(error)) {
      throw error;
    }

    throw InternalServerError;
  }
};
