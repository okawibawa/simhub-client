"use client";

import Image from "next/image";
import { IconLanguage, IconMenu2 } from "@tabler/icons-react";

import { Anchor, Button, Select } from "@/app/_components/atoms";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-[18px]">
      <div className="grid-content">
        <div className="flex items-center">
          <div className="flex-1">
            <Image src="/logo.svg" width={170} height={32} alt="logo" />
          </div>

          <div className="space-x-2 hidden lg:block">
            <Anchor href="#" className="px-3">
              Destination
            </Anchor>
            <Anchor href="#" className="px-3">
              How it Works
            </Anchor>
            <Anchor href="#" className="px-3">
              Contact Us
            </Anchor>
          </div>

          <Select
            leftIcon={<IconLanguage />}
            onChange={(e) => console.log(e)}
            className="hidden lg:flex"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </Select>

          <div className="space-x-4 flex items-center">
            <Button
              variant="secondary"
              className="hover:bg-zinc-50/10 outline-white hidden lg:block"
            >
              Login
            </Button>
            <Button>Register</Button>
            <IconMenu2 className="block lg:hidden" size={24} color="white" />
          </div>
        </div>
      </div>
    </nav>
  );
};
