import { ComponentProps, Ref } from "react";
import { cva, VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  [
    "rounded-lg",
    "p-4",
    "bg-zinc-200",
    "text-zinc-50",
    "focus:outline-none",
    "text-base",
    "leading-6",
    "w-full",
    "text-zinc-800",
  ],
  {
    variants: {
      variant: {
        primary: [
          "focus:bg-zinc-300",
          "focus:outline",
          "focus:outline-zinc-500",
        ],
      },
      isError: {
        true: ["border", "border-red-500"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface InputProps
  extends ComponentProps<"input">,
    VariantProps<typeof inputVariants> {
  ref?: Ref<HTMLInputElement>;
}
