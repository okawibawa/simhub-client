"use client";

import { forwardRef } from "react";

// utils
import { cn } from "@/app/_utils";

// types
import { ButtonProps, buttonVariants } from "@/app/_types/cva";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, isLoading = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, isLoading, variant }))}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
