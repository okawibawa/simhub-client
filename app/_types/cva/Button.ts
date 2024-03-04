import { ComponentProps, Ref } from "react";
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
    "w-auto",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-primary-500", "hover:bg-primary-600"],
        secondary: [
          "bg-transparent",
          "border",
          "border-primary-500",
          "hover:bg-zinc-800",
        ],
        tertiary: ["bg-transparent", "hover:bg-zinc-800"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  ref?: Ref<HTMLButtonElement>;
}
