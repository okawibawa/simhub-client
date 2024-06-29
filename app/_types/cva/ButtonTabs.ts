import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

export const buttonTabsVariants = cva(
  ["rounded-full", "py-2", "px-4", "text-base", "leading-6", "font-medium"],
  {
    variants: {
      variant: {
        primary: [
          "border",
          "border-blue-600",
          "text-zinc-600",
          "hover:bg-blue-500",
          "hover:text-zinc-50",
        ],
      },
      isDisabled: {
        true: ["cursor-not-allowed", "opacity-75"],
      },
      isActive: {
        true: [
          "border",
          "border-blue-500",
          "bg-blue-500",
          "text-zinc-50",
          "hover:bg-blue-400",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
      isActive: false,
      isDisabled: false,
    },
  }
);

export interface ButtonTabsProps
  extends PropsWithChildren<
    VariantProps<typeof buttonTabsVariants> & ComponentProps<"button">
  > {}
