import { ApiError, InternalServerError, isApiError } from "../../_utils";

export const updateUser = async (data: FormData) => {
  try {
    const payload = Object.fromEntries(data);
    const id = payload.id;

    data.delete("id");

    const response = await fetch(`${process.env.HOST_API_URL}/users/${id}`, {
      method: "PUT",
      body: data,
      next: {
        revalidate: 60 * 60 * 24,
      },
    });

    if (!response.ok) {
      throw ApiError(response.status, "Error updating user");
    }

    return await response.json();
  } catch (error) {
    if (isApiError(error)) {
      throw error;
    }

    throw InternalServerError;
  }
};
