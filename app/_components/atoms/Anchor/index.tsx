import Link from "next/link";

// utils
import { cn } from "@/app/_utils/cn";

// interfaces
import {
  AnchorProps,
  ExternalAnchorProps,
  InternalAnchorProps,
  anchorVariants,
} from "@/app/_types/cva";

const InternalAnchor = ({ children, ...props }: InternalAnchorProps) => {
  return <Link {...props}>{children}</Link>;
};

const ExternalAnchor = ({ children, ...props }: ExternalAnchorProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export const Anchor = ({
  size,
  className,
  children,
  isExternal = false,
  ...props
}: AnchorProps & InternalAnchorProps & ExternalAnchorProps) => {
  if (isExternal) {
    return (
      <ExternalAnchor
        className={cn(anchorVariants({ className, size }))}
        {...props}
      >
        {children}
      </ExternalAnchor>
    );
  }

  return (
    <InternalAnchor
      className={cn(anchorVariants({ className, size }))}
      {...props}
    >
      {children}
    </InternalAnchor>
  );
};
