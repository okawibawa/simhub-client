import { createElement } from "react";

// utils
import { cn } from "@/app/_utils/cn";

// interfaces
import { TypographyProps, typographyVariants } from "@/app/_types/cva";

export const Typography = ({
  as,
  className,
  children,
  ...props
}: TypographyProps) => {
  let element = "";

  switch (as) {
    case "headline":
      element = "h1";
      break;
    case "subheading1":
      element = "h2";
      break;
    case "subheading2":
      element = "h3";
      break;
    default:
      element = "p";
      break;
  }

  return createElement(
    element,
    { className: cn(typographyVariants({ className, as })), ...props },
    children
  );
};
