"use client";

import { useTransition } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signInEntity, signInSchema } from "@/app/_types/entities";

// atoms
import { Input, Anchor, Button, Typography } from "../../atoms";

import { loginAction } from "@/app/_actions";

export const LoginForms = () => {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(loginAction, {
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues },
  } = useForm<signInEntity>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(state?.fields || {}),
    },
  });

  return (
    <form
      className="mb-8 space-y-5"
      action={formAction}
      onSubmit={handleSubmit((data) => {
        startTransition(async () => {
          try {
            const formData = new FormData();

            formData.append("email", data.email);
            formData.append("password", data.password);

            await formAction(formData);
          } catch (error) {
            console.error("Form submission error:", error);
          }
        });
      })}
    >
      <Input
        placeholder="email"
        type="email"
        defaultValue={defaultValues?.password}
        aria-disabled={isPending}
        disabled={isPending}
        {...register("email")}
        isError={errors.email ? true : false}
      />
      {errors.email && (
        <Typography as="body7" className="!mt-2 font-normal text-red-500">
          {errors.email.message}
        </Typography>
      )}

      <Input
        placeholder="password"
        type="password"
        defaultValue={defaultValues?.password}
        aria-disabled={isPending}
        disabled={isPending}
        {...register("password")}
        isError={errors.password ? true : false}
      />
      {errors.password && (
        <Typography as="body7" className="!mt-2 font-normal text-red-500">
          {errors.password.message}
        </Typography>
      )}

      <div className="flex items-center justify-end">
        <Anchor href="#" className="text-zinc-600">
          Forgot password?
        </Anchor>
      </div>

      <Button
        className="w-full"
        type="submit"
        aria-disabled={isPending}
        isLoading={isPending}
      >
        Login
      </Button>

      {state && state.message && (
        <Typography as="body7" className="font-normal text-red-500">
          {state.message}
        </Typography>
      )}
    </form>
  );
};
