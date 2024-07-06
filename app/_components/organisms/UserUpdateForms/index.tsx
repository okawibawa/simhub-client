"use client";

import { useTransition } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteCookie, setCookie, getCookie } from "cookies-next";

import { Input, Button, Typography } from "../../atoms";

import { updateUser } from "@/app/_actions/userActions";

import { userUsernameSchema, userUsernameData } from "@/app/_types/entities";

export const UserUpdateForms = () => {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(updateUser, {
    message: "",
  });

  const user = getCookie("user");
  const parsedUser = user && JSON.parse(user)[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userUsernameData>({
    resolver: zodResolver(userUsernameSchema),
    defaultValues: {
      ...(state?.fields || {}),
    },
  });

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit((data) => {
        startTransition(async () => {
          try {
            const formData = new FormData();

            formData.append("id", parsedUser?.id);
            formData.append("username", data.username);

            await formAction(formData);
          } catch (error) {
            console.error("Form submission error: ", error);
          }
        });
      })}
    >
      <div className="mb-5">
        <label htmlFor="name" className="text-zinc-800">
          Name
        </label>
        <Input
          id="name"
          placeholder="Name"
          type="text"
          className="mt-3"
          defaultValue={parsedUser?.username}
          aria-disabled={isPending}
          isDisabled={isPending}
          isError={errors.username ? true : false}
          {...register("username")}
        />
      </div>
      {errors.username && (
        <Typography as="body7" className="!mt-2 font-normal text-red-500">
          {errors.username.message}
        </Typography>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="text-zinc-800">
          Email
        </label>
        <Input
          placeholder="Email"
          type="email"
          className="mt-3"
          defaultValue={parsedUser?.email}
          isDisabled
        />
      </div>

      {state?.status === 200 && state?.message && (
        <Typography as="body7" className="font-normal">
          {state.message}
        </Typography>
      )}

      <div className="flex justify-end">
        <Button isLoading={isPending} aria-disabled={isPending}>
          Save Profile
        </Button>
      </div>
    </form>
  );
};
