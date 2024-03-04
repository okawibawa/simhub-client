import { ZodType, z } from "zod";

// interfaces
import { AuthLogin } from "../interfaces/auth";

export const authLoginSchema: ZodType<AuthLogin> = z.object({
  email: z.string().min(3, {
    message: "Incorrect email format.",
  }),
  password: z.string().min(6, {
    message:
      "Password must be at least 6 characters containing numbers and special letters.",
  }),
});
