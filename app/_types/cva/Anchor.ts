import { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";

export const anchorVariants = cva(["text-zinc-100"], {
  variants: {
    size: {
      sm: ["text-xs", "leading-[18px]"],
      md: ["text-sm", "leading-[18px]"],
      lg: ["text-base", "leading-[18px]"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface AnchorProps extends VariantProps<typeof anchorVariants> {
  className?: string;
  children: ReactNode;
  isExternal?: boolean;
}

export interface ExternalAnchorProps
  extends PropsWithChildren<AnchorProps & ComponentProps<"a">> {}

export interface InternalAnchorProps extends AnchorProps, LinkProps {}
