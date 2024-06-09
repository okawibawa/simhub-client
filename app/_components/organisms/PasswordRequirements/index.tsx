import { useState } from "react";

import { Typography } from "@/app/_components/atoms";

interface PasswordRequirementsProps {
  password: string;
}

export const PasswordRequirements = ({
  password,
}: PasswordRequirementsProps) => {
  return (
    <div className="mb-6 rounded-md bg-zinc-950 px-4 py-3">
      <Typography as="body7" className="mb-2">
        Your password need to:
      </Typography>
      <ul className="mx-4 list-disc space-y-2">
        <li>
          <Typography as="body7" className="font-normal">
            include both lower and upper case characters
          </Typography>
        </li>
        <li>
          <Typography as="body7" className="font-normal">
            include at least one number and symbol
          </Typography>
        </li>
        <li>
          <Typography as="body7" className="font-normal">
            be at least 6 characters long
          </Typography>
        </li>
      </ul>
    </div>
  );
};
