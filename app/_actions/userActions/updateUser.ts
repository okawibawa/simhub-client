"use server";

import { updateUser as updateUserApi } from "@/app/_libs/api/users";
import { isApiError } from "../../_utils";
import { cookies } from "next/headers";

interface LoginState {
  type?: string;
  message: string;
  fields?: Record<string, string>;
  status?: number;
  ok?: boolean;
  data?: any;
}

export const updateUser = async (
  previousState: LoginState,
  data: FormData
): Promise<LoginState> => {
  try {
    const updatedUser = await updateUserApi(data);

    delete updatedUser.data[0].password;
    delete updatedUser.data[0].createdAt;
    delete updatedUser.data[0].updatedAt;

    cookies().set({
      name: "user",
      value: JSON.stringify(updatedUser.data[0]),
    });

    return {
      status: 200,
      message: updatedUser.message,
    };
  } catch (error) {
    if (isApiError(error)) {
      return { ok: error.ok, status: error.code, message: error.message };
    }

    return { ok: false, status: 500, message: "Something went wrong" };
  }
};
