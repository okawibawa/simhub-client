import { forwardRef } from "react";

// utils
import { cn } from "@/app/_utils/cn";

// interfaces
import {
  ButtonSelectPlanProps,
  buttonSelectPlanVariants,
} from "@/app/_types/cva";

const ButtonSelectPlan = forwardRef<HTMLButtonElement, ButtonSelectPlanProps>(
  ({ variant, isSelected, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonSelectPlanVariants({ variant, isSelected, className })
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonSelectPlan.displayName = "ButtonSelectPlan";

export { ButtonSelectPlan };
