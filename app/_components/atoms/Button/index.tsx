"use client";

import { forwardRef } from "react";

// utils
import { cn } from "@/app/_utils";

// types
import { ButtonProps, buttonVariants } from "@/app/_types/cva";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, variant }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
