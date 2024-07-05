"use client";

import { forwardRef, useMemo, useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

// utils
import { cn } from "@/app/_utils";

// types
import { inputVariants, InputProps } from "@/app/_types/cva";

// interfaces
interface TogglePasswordProps {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = "text", variant, isError, isDisabled, className, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const inputType = useMemo(() => {
      if (type === "password" && showPassword) {
        return "text";
      }

      return type;
    }, [type, showPassword]);

    return (
      <div className="relative">
        <input
          ref={ref}
          type={inputType}
          className={cn(
            inputVariants({
              className: type === "password" ? `${className} pr-12` : className,
              variant,
              isError,
              isDisabled,
            })
          )}
          disabled={isDisabled}
          {...props}
        />
        {type === "password" && (
          <TogglePassword
            showPassword={showPassword}
            togglePasswordVisibility={handleTogglePasswordVisibility}
          />
        )}
      </div>
    );
  }
);

const TogglePassword = ({
  showPassword,
  togglePasswordVisibility,
}: TogglePasswordProps) => {
  return (
    <>
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? (
          <IconEyeOff
            size={24}
            color="black"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        ) : (
          <IconEye
            size={24}
            color="black"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        )}
      </button>
    </>
  );
};

Input.displayName = "Input";

export { Input };
