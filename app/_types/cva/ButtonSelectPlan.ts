import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

export const buttonSelectPlanVariants = cva(["rounded-lg", "px-4", "py-2"], {
  variants: {
    variant: {
      primary: ["bg-zinc-900", "text-zinc-50", "hover:bg-zinc-800"],
    },
    isSelected: {
      true: [
        "border",
        "border-orange-800",
        "bg-orange-950",
        "text-orange-500",
        "hover:bg-orange-950",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
    isSelected: false,
  },
});

export interface ButtonSelectPlanProps
  extends VariantProps<typeof buttonSelectPlanVariants>,
    ComponentProps<"button"> {}
