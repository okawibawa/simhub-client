interface CustomError extends Error {
  ok: boolean;
  code: number;
  message: string;
}

const createCustomError = (name: string) => (code: number, message: string) => {
  const error = new Error(message) as CustomError;

  error.name = name;
  error.code = code;
  error.ok = code >= 200 && code < 300;

  return error;
};

export const ApiError = createCustomError("ApiError");
export const InternalServerError = createCustomError("InternalServerError")(
  500,
  "Internal Server Error"
);

export const isApiError = (error: unknown): error is CustomError => {
  return error instanceof Error && error.name === "ApiError" && "code" in error;
};

// export const NotFoundError = createCustomError(404, "Not Found");
// export const UnauthorizedError = createCustomError(401, "Unauthorized");
