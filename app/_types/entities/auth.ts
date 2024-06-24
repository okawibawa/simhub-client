import { z } from "zod";

export const baseAuthSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email format." }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Minimum of 6 characters." })

    .regex(/[A-Z]/, {
      message: "Must contain an uppercase letter.",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Must contain one special character.",
    }),
});

export const signInSchema = baseAuthSchema;
export const signUpSchema = baseAuthSchema.extend({
  username: z.string().trim().min(3, { message: "Minimum of 3 characters." }),
});

export type signInEntity = z.infer<typeof signInSchema>;
