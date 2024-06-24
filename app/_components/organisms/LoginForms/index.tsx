"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

// atoms
import { Input, Anchor, Button, Typography } from "../../atoms";

import { login } from "@/app/_actions";

export const LoginForms = () => {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const { pending } = useFormStatus();

  const handleSubmit = async (formData: FormData) => {
    try {
      const result = await login(formData);

      console.log({ result });
    } catch (error: any) {
      const parsedError = JSON.parse(error.message);

      console.log({ parsedError });

      if (parsedError.type === "APIError") {
        setError(parsedError.message);
      }

      if (parsedError.type === "ValidationError") {
        console.log({ keysssssss: parsedError.message });

        // setError(parsedError.message.fieldErrors);
      }

      setIsError(true);
    }
  };

  return (
    <form className="mb-8 space-y-5" action={handleSubmit}>
      <Input
        placeholder="email"
        type="email"
        name="email"
        aria-disabled={pending}
        disabled={pending}
        isError={isError}
      />
      <Input
        placeholder="password"
        type="password"
        name="password"
        aria-disabled={pending}
        disabled={pending}
        isError={isError}
      />

      <div className="flex items-center justify-end">
        <Anchor href="#" className="text-zinc-400">
          Forgot password?
        </Anchor>
      </div>

      <Button
        className="w-full"
        type="submit"
        aria-disabled={pending}
        isLoading={pending}
      >
        Login
      </Button>

      {error && (
        <Typography as="body7" className="font-normal text-red-500">
          {error}
        </Typography>
      )}
    </form>
  );
};
