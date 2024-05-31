"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconLanguage, IconMenu2 } from "@tabler/icons-react";

// atoms
import { Anchor, Button, Select } from "@/app/_components/atoms";

import { NavigationMobile } from "./NavigationMobile";

export const Navigation = () => {
  const [pastYMousePosition, setPastYMousePosition] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 2) {
            setPastYMousePosition(true);
            return;
          }

          setPastYMousePosition(false);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIsMobileMenuOpen = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full py-[18px] transition-all duration-200 ${
        pathname !== "/" || pastYMousePosition
          ? "bg-zinc-900 shadow-lg shadow-zinc-400/5"
          : "bg-transparent"
      }`}
    >
      <div className="grid-content">
        <div className="flex items-center">
          <div className="flex-1">
            <Anchor href="/">
              <Image
                src="/simhub-logo-light.svg"
                width={110}
                height={32}
                alt="logo"
                placeholder="blur"
                blurDataURL="/simhub-logo-light.svg"
              />
            </Anchor>
          </div>

          <div className="hidden space-x-2 lg:block">
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

          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              className="hidden outline-white hover:bg-zinc-50/10 lg:block"
            >
              Login
            </Button>
            <Button>Register</Button>
            <IconMenu2
              className="block lg:hidden"
              size={24}
              color="white"
              onClick={handleIsMobileMenuOpen}
            />
          </div>
        </div>
      </div>

      <NavigationMobile
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={handleIsMobileMenuOpen}
      />
    </nav>
  );
};
