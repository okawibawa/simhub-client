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
export const UnauthorizedError = createCustomError("UnauthorizedError");
export const InternalServerError = createCustomError("InternalServerError")(
  500,
  "Internal Server Error"
);

export const isApiError = (error: unknown): error is CustomError => {
  return error instanceof Error && error.name === "ApiError" && "code" in error;
};

export const isUnauthorizedError = (error: unknown): error is CustomError => {
  return (
    error instanceof Error &&
    error.name === "UnauthorizedError" &&
    "code" in error
  );
};
