"use client";

import { useTransition } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Input, Button, Typography } from "../../atoms";
import { updateUser } from "@/app/_actions/userActions";
import { userPasswordData, userPasswordSchema } from "@/app/_types/entities";
import { getCookie } from "cookies-next";
import { PasswordRequirements } from "../PasswordRequirements";

export const UserUpdatePasswordForms = () => {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(updateUser, {
    message: "",
  });

  const user = getCookie("user");
  const parsedUser = user && JSON.parse(user)[0];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, defaultValues },
  } = useForm<userPasswordData>({
    resolver: zodResolver(userPasswordSchema),
    defaultValues: {
      ...(state?.fields || {}),
    },
  });

  if (state?.status === 200) {
    toast.success("Password updated successfully");

    state.status = undefined;
    setValue("password", "");
    setValue("confirmPassword", "");
  }

  return (
    <>
      {/* <PasswordRequirements /> */}

      <form
        action={formAction}
        onSubmit={handleSubmit((data) => {
          startTransition(async () => {
            try {
              const formData = new FormData();

              formData.append("id", parsedUser?.id);
              formData.append("password", data.password);
              formData.append("confirmPassword", data.confirmPassword);

              await formAction(formData);
            } catch (error) {
              console.error("Form submission error: ", error);
            }
          });
        })}
      >
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 inline-block text-zinc-800">
            New Password
          </label>
          <Input
            id="password"
            placeholder="password"
            type="password"
            aria-disabled={isPending}
            isDisabled={isPending}
            isError={errors.password ? true : false}
            {...register("password")}
          />
          {errors.password && (
            <Typography
              as="body7"
              className="!mt-2 mb-2 font-normal text-red-500"
            >
              {errors.password.message}
            </Typography>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="mb-3 inline-block text-zinc-800">
            Confirm Password
          </label>
          <Input
            id="confirm-password"
            placeholder="password"
            type="password"
            aria-disabled={isPending}
            isDisabled={isPending}
            isError={errors.confirmPassword ? true : false}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <Typography
              as="body7"
              className="!mt-2 mb-2 font-normal text-red-500"
            >
              {errors.confirmPassword.message}
            </Typography>
          )}
        </div>

        <div className="flex justify-end">
          <Button type="submit">Update Password</Button>
        </div>
      </form>
    </>
  );
};
