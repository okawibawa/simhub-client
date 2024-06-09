"use client";

import { usePathname } from "next/navigation";

// atoms
import { Anchor, Button, Typography } from "@/app/_components/atoms";

export const UserSideNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="h-fit text-white">
      <Typography as="subheading2" className="mb-10">
        Profile
      </Typography>

      <div className="flex flex-col">
        <Anchor
          href="/user/settings"
          className={`mb-4 border-l-2 px-4 py-2 pl-[14px] text-base font-medium text-zinc-400 hover:text-white ${pathname === "/user/settings" ? "border-zinc-50 text-white" : "border-transparent"}`}
        >
          Account Settings
        </Anchor>
        <Anchor
          href="/user/password"
          className={`border-l-2 px-4 py-2 pl-[14px] text-base font-medium text-zinc-400 hover:text-white ${pathname === "/user/password" ? "border-zinc-50 text-white" : "border-transparent"}`}
        >
          Password
        </Anchor>
      </div>

      <div className="my-4 h-[1px] w-full bg-zinc-700" />

      <Button
        variant="tertiary"
        className="w-full text-left text-red-500 hover:bg-transparent"
      >
        Logout
      </Button>
    </div>
  );
};
