"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

import { signInSchema } from "../_types/entities";

import { parseSetCookieString } from "../_utils";

export const login = async (formData: FormData) => {
  const validatedBody = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedBody.success) {
    throw new Error(
      JSON.stringify({
        type: "ValidationError",
        message: validatedBody.error.flatten(),
      })
    );
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
      throw new Error(
        JSON.stringify({
          type: "APIError",
          status: response.status,
          message: errorData.message || "Authentication failed",
        })
      );
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
  } catch (error: any) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(
        JSON.stringify({
          type: "UnknownError",
          message: "An unknown error occurred. Please contact admin.",
        })
      );
    }
  }
};
