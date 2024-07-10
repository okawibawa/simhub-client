import { z } from "zod";

export const userUsernameSchema = z.object({
  username: z.string().trim().min(3, { message: "Minimum of 3 characters." }),
});

export const userPasswordSchema = z
  .object({
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
    confirmPassword: z
      .string()
      .trim()
      .min(6, { message: "Minimum of 6 characters." })

      .regex(/[A-Z]/, {
        message: "Must contain an uppercase letter.",
      })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "Must contain one special character.",
      }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match.",
        path: ["confirmPassword"],
      });
    }
  });

export type userPasswordData = z.infer<typeof userPasswordSchema>;
export type userUsernameData = z.infer<typeof userUsernameSchema>;
