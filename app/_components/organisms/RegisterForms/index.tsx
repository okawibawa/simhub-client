"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";

import { Input, Button, Typography } from "../../atoms";

import { registerAction } from "@/app/_actions";

import { signUpEntity, signUpSchema } from "@/app/_types/entities";

export const RegisterForms = () => {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(registerAction, {
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues },
  } = useForm<signUpEntity>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      ...(state?.fields || {}),
    },
  });

  return (
    <form
      className="mb-8 space-y-5"
      action={formAction}
      onSubmit={handleSubmit((data: signUpEntity) => {
        startTransition(async () => {
          const formData = new FormData();

          formData.append("email", data.email);
          formData.append("username", data.username);
          formData.append("password", data.password);

          try {
            await formAction(formData);
          } catch (error) {
            console.error("Form submission error: ", error);
          }
        });
      })}
    >
      <Input
        placeholder="email"
        type="email"
        aria-disabled={isPending}
        disabled={isPending}
        defaultValue={defaultValues?.email}
        {...register("email")}
        isError={errors.email ? true : false}
      />
      {errors.email && (
        <Typography as="body7" className="!mt-2 font-normal text-red-500">
          {errors.email.message}
        </Typography>
      )}

      <Input
        placeholder="username"
        type="text"
        aria-disabled={isPending}
        disabled={isPending}
        defaultValue={defaultValues?.username}
        {...register("username")}
        isError={errors.username ? true : false}
      />
      {errors.username && (
        <Typography as="body7" className="!mt-2 font-normal text-red-500">
          {errors.username.message}
        </Typography>
      )}

      <Input
        placeholder="password"
        type="password"
        aria-disabled={isPending}
        disabled={isPending}
        defaultValue={defaultValues?.password}
        {...register("password")}
        isError={errors.password ? true : false}
      />
      {errors.password && (
        <Typography as="body7" className="!mt-2 font-normal text-red-500">
          {errors.password.message}
        </Typography>
      )}

      <Button
        className="w-full"
        type="submit"
        isLoading={isPending}
        aria-disabled={isPending}
      >
        Register
      </Button>
      {state.message && (
        <Typography as="body7" className="font-normal text-red-500">
          {state.message}
        </Typography>
      )}
    </form>
  );
};
