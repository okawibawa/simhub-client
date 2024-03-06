import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

export const buttonTabsVariants = cva(
  ["rounded-full", "py-2", "px-4", "text-base", "leading-6", "font-medium"],
  {
    variants: {
      variant: {
        primary: [
          "border",
          "border-zinc-700",
          "text-zinc-400",
          "hover:bg-zinc-800",
        ],
      },
      isActive: {
        true: ["border-0", "bg-zinc-50", "text-zinc-950", "hover:bg-zinc-100"],
      },
    },
    defaultVariants: {
      variant: "primary",
      isActive: false,
    },
  }
);

export interface ButtonTabsProps
  extends PropsWithChildren<
    VariantProps<typeof buttonTabsVariants> & ComponentProps<"button">
  > {}
