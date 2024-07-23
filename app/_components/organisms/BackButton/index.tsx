"use client";

import { useRouter } from "next/navigation";

import { IconArrowLeft } from "@tabler/icons-react";
import { Typography } from "../../atoms";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <Typography as="body4" className="mb-6 flex items-center gap-2">
        <IconArrowLeft />
        eSIM Plans
      </Typography>
    </button>
  );
};
