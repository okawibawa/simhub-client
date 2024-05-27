"use client";

import { forwardRef } from "react";

// utils
import { cn } from "@/app/_utils";

// interface
import { ButtonTabsProps, buttonTabsVariants } from "@/app/_types/cva";

const ButtonTabs = forwardRef<HTMLButtonElement, ButtonTabsProps>(
  ({ variant, isActive, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonTabsVariants({ variant, isActive, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonTabs.displayName = "ButtonTabs";

export { ButtonTabs };
