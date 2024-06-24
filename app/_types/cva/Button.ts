import { ComponentProps, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "rounded",
    "text-sm",
    "leading-[18px]",
    "py-3",
    "px-4",
    "text-white",
    "font-medium",
    "w-max",
    "outline",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary-500",
          "hover:bg-primary-600",
          "outline-1",
          "outline-primary-500",
          "hover:outline-primary-600",
        ],
        secondary: [
          "bg-transparent",
          "outline-1",
          "outline-primary-500",
          "hover:bg-zinc-800",
        ],
        tertiary: [
          "bg-transparent",
          "hover:bg-zinc-800",
          "outline-transparent",
        ],
      },
      isLoading: {
        true: [
          "bg-zinc-800",
          "outline-transparent",
          "hover:bg-zinc-900",
          "hover:outline-transparent",
          "cursor-not-allowed",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends PropsWithChildren<
    ComponentProps<"button"> & VariantProps<typeof buttonVariants>
  > {
  isLoading?: boolean | undefined;
}
