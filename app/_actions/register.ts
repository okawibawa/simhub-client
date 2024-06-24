"use server";

import { cookies } from "next/headers";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

import { signUpSchema } from "../_types/entities";

import { parseSetCookieString } from "../_utils";

interface RegisterState {
  type?: string;
  message: string;
  status?: number;
  fields?: Record<string, string>;
}

export const registerAction = async (
  previousState: RegisterState,
  data: FormData
): Promise<RegisterState> => {
  const formData = Object.fromEntries(data);

  const validatedBody = signUpSchema.safeParse(formData);

  if (!validatedBody.success) {
    const fields: Record<string, string> = {};

    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return { type: "ValidationError", message: "Validation error.", fields };
  }

  const payload = new FormData();

  payload.append("email", validatedBody.data.email);
  payload.append("username", validatedBody.data.username);
  payload.append("password", validatedBody.data.password);

  try {
    const response = await fetch(`${process.env.HOST_API_URL}/auth/sign-up`, {
      method: "POST",
      body: payload,
      headers: {
        Cookies: cookies().toString(),
      },
      credentials: "include",
    });

    const result = await response.json();

    if (!result.ok) {
      const errorData = await response.json();
      return {
        type: "APIError",
        status: response.status,
        message: errorData.message || "Authentication failed",
        fields: validatedBody.data,
      };
    }

    const sessionCookie = response.headers.get("Set-Cookie");

    if (sessionCookie) {
      const parsedCookies = parseSetCookieString(sessionCookie);

      cookies().set({
        name: parsedCookies.name,
        value: parsedCookies.value,
        ...parsedCookies.options,
      });
    }

    redirect("/");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

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
