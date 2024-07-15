"use server";

import { logoutUser as logoutUserApi } from "@/app/_libs/api/users";
import { isApiError } from "@/app/_utils";

interface LogoutState {
  type?: string;
  message: string;
  fields?: Record<string, string>;
  status?: number | undefined;
  ok?: boolean;
  data?: any;
}

export const logoutUser = async (
  previousState: LogoutState,
  data: FormData
): Promise<LogoutState> => {
  try {
    const updatedUser = await logoutUserApi(data);

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
