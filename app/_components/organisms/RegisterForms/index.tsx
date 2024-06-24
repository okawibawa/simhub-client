"use client";

import { useFormStatus } from "react-dom";

import { Input, Button } from "../../atoms";

export const RegisterForms = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <Input
        placeholder="email"
        type="email"
        name="email"
        aria-disabled={pending}
        disabled={pending}
      />
      <Input
        placeholder="username"
        type="text"
        name="username"
        aria-disabled={pending}
        disabled={pending}
      />
      <Input
        placeholder="password"
        type="password"
        name="password"
        aria-disabled={pending}
        disabled={pending}
      />

      <Button
        className="w-full"
        type="submit"
        isLoading={pending}
        aria-disabled={pending}
      >
        Register
      </Button>
    </>
  );
};
