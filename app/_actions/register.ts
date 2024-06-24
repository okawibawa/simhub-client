"use server";

import { cookies } from "next/headers";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

import { signUpSchema } from "../_types/entities";

import { parseSetCookieString } from "../_utils";

export const register = async (formData: FormData) => {
  const validatedBody = signUpSchema.safeParse({
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedBody.success) {
    return { message: "Failed to login." };
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
      return result;
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

    return { ok: false, message: "An unexpected error occurred." };
  }
};
