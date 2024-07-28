"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

import { signInSchema } from "../_types/entities";

import { parseSetCookieString } from "../_utils";

interface LoginState {
  type?: string;
  message: string;
  fields?: Record<string, string>;
  status?: number;
}

export const loginAction = async (
  previousState: LoginState,
  data: FormData
): Promise<LoginState> => {
  const formData = Object.fromEntries(data);

  const validatedBody = signInSchema.safeParse(formData);

  if (!validatedBody.success) {
    const fields: Record<string, string> = {};

    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      type: "ValidationError",
      message: "Validation error.",
      fields,
    };
  }

  const payload = new FormData();

  payload.append("email", validatedBody.data.email);
  payload.append("password", validatedBody.data.password);

  try {
    const response = await fetch(`${process.env.HOST_API_URL}/auth/sign-in`, {
      method: "POST",
      body: payload,
      headers: {
        Cookies: cookies().toString(),
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        type: "APIError",
        status: response.status,
        message: errorData.message || "Authentication failed",
        fields: validatedBody.data,
      };
    }

    const result = await response.json();
    const sessionCookie = response.headers.get("Set-Cookie");

    delete result.data.password;
    delete result.data.createdAt;
    delete result.data.updatedAt;

    cookies().set({
      name: "user",
      value: JSON.stringify(result.data),
    });

    if (sessionCookie) {
      const parsedCookies = parseSetCookieString(sessionCookie);

      cookies().set({
        name: parsedCookies.name,
        value: parsedCookies.value,
        ...parsedCookies.options,
      });
    }

    const returnUrl = cookies().get("returnUrl")?.value;

    if (returnUrl) {
      cookies().delete("returnUrl");

      return redirect(returnUrl);
    }

    redirect("/");
  } catch (error: any) {
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
