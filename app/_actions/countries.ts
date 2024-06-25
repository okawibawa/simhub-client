"use server";

export const countriesAction = async () => {
  try {
    const response = await fetch(`${process.env.HOST_API_URL}/countries`);

    const result = response.json();

    return result;
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return {
        type: "UnknownError",
        message: "An unknown error occurred. Please contact admin.",
      };
    }
  }
};
