import { ComponentProps, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

export const selectVariants = cva(
  [
    "p-3",
    "gap-2",
    "cursor-pointer",
    "text-sm",
    "font-medium",
    "leading-[18px]",
    "text-zinc-100",
    "flex",
    "items-center",
  ],
  {
    variants: {
      type: {
        filled: [],
      },
    },
    defaultVariants: {
      type: "filled",
    },
  }
);

export interface SelectProps
  extends VariantProps<typeof selectVariants>,
    Omit<ComponentProps<"div">, "onChange"> {
  leftIcon?: ReactNode;
  onChange?: (_value: string) => void;
  children?: ReactNode;
}
