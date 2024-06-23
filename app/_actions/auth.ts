"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { signInSchema } from "../_types/entities";
import { isRedirectError } from "next/dist/client/components/redirect";

import { parseSetCookieString } from "../_utils";

export const login = async (formData: FormData) => {
  const validatedBody = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedBody.success) {
    return { message: "Failed to login." };
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

    const result = await response.json();

    if (!result.ok) {
      throw new Error("Failed to login.");
    }

    const sessionCookie = response.headers.get("Set-Cookie");

    if (sessionCookie) {
      cookies().set(parseSetCookieString(sessionCookie));
    }

    redirect("/");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    throw new Error("Failed to login.");
  }
};
