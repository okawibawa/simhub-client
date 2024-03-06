import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

export const typographyVariants = cva("text-zinc-50", {
  variants: {
    as: {
      headline: [
        "text-[49px]",
        "leading-[53px]",
        "md:text-[54px]",
        "md:leading-[72px]",
        "font-bold",
      ],
      subheading1: [
        "text-[37px]",
        "leading-[42px]",
        "md:text-[44px]",
        "md:leading-[56px]",
        "font-medium",
      ],
      subheading2: [
        "text-[29px]",
        "leading-[38px]",
        "md:text-[32px]",
        "md:leading-[42px]",
        "font-medium",
      ],
      body1: [
        "text-[24px]",
        "leading-8",
        "md:text-[26px]",
        "md:leading-[38px]",
        "font-medium",
      ],
      body2: [
        "text-xl",
        "leading-7",
        "md:text-2xl",
        "md:leading-[30px]",
        "font-medium",
      ],
      body3: [
        "text-lg",
        "leading-7",
        "md:text-xl",
        "md:leading-7",
        "font-medium",
      ],
      body4: [
        "text-base",
        "leading-6",
        "md:text-lg",
        "md:leading-7",
        "font-normal",
      ],
      body5: [
        "text-sm",
        "leading-[18px]",
        "md:text-base",
        "md:leading-6",
        "font-normal",
      ],
      body6: ["text-[15px]", "leading-6", "font-medium"],
      body7: ["text-sm", "leading-[18px]", "font-medium"],
    },
  },
  defaultVariants: {
    as: "body1",
  },
});

export interface TypographyProps
  extends PropsWithChildren<
    VariantProps<typeof typographyVariants> &
      ComponentProps<"p"> &
      ComponentProps<"h1"> &
      ComponentProps<"h2"> &
      ComponentProps<"h3">
  > {}
