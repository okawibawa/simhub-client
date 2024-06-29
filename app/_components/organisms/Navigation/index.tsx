"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconLanguage, IconMenu2 } from "@tabler/icons-react";

// stores
import { useNavigationHeightStore } from "@/app/_stores";

// atoms
import { Anchor, Button, Select } from "@/app/_components/atoms";

import { NavigationMobile } from "./NavigationMobile";
import Link from "next/link";

export const Navigation = () => {
  const { navigationBarHeight, setNavigationBarHeight } =
    useNavigationHeightStore();

  const [pastYMousePosition, setPastYMousePosition] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 2) {
          setPastYMousePosition(true);
          return;
        }

        setPastYMousePosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIsMobileMenuOpen = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setNavigationBarHeight(navRef.current?.offsetHeight || 0);
      }
    };

    setNavigationBarHeight(navRef.current?.offsetHeight || 0);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setNavigationBarHeight]);

  const pathnameToExcludeNavigation = ["/login", "/register"];
  const pathnameToExcludeDivPlaceholder = ["/", "/checkout/esim"];

  if (pathnameToExcludeNavigation.includes(pathname)) {
    return null;
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 top-0 z-50 w-full py-[18px] transition-all duration-200 ${
          pathname !== "/" || pastYMousePosition
            ? "bg-zinc-100 shadow-lg shadow-zinc-600/10"
            : "bg-transparent"
        }`}
      >
        <div className="grid-content">
          <div className="flex items-center">
            <div className="flex-1">
              <Anchor href="/" className="inline-block w-fit">
                <Image
                  src={
                    pathname !== "/" || pastYMousePosition
                      ? "/simhub-logo-dark.svg"
                      : "/simhub-logo-light.svg"
                  }
                  width={110}
                  height={32}
                  alt="logo"
                  placeholder="blur"
                  blurDataURL="/simhub-logo-light.svg"
                />
              </Anchor>
            </div>

            <div className="hidden space-x-2 lg:block">
              <Anchor
                href="/#destination"
                className={`${pathname !== "/" || pastYMousePosition ? "text-zinc-800" : "text-zinc-50"} px-3`}
              >
                Destination
              </Anchor>
              <Anchor
                href="/#how-it-works"
                className={`${pathname !== "/" || pastYMousePosition ? "text-zinc-800" : "text-zinc-50"} px-3`}
              >
                How it Works
              </Anchor>
              <Anchor
                href="/#contact-us"
                className={`${pathname !== "/" || pastYMousePosition ? "text-zinc-800" : "text-zinc-50"} px-3`}
              >
                Contact Us
              </Anchor>
            </div>

            <Select
              leftIcon={<IconLanguage />}
              onChange={(e) => console.log(e)}
              className={`${pathname !== "/" || pastYMousePosition ? "text-zinc-800" : "text-zinc-50"} hidden lg:flex`}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </Select>

            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="secondary"
                  className={`${pathname !== "/" || pastYMousePosition ? "text-zinc-800" : "text-zinc-50 outline-white"} hidden hover:bg-zinc-50/10 lg:block`}
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
              <IconMenu2
                className="block lg:hidden"
                size={24}
                color={
                  pathname !== "/" || pastYMousePosition ? "black" : "white"
                }
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
      <div
        style={{
          height: `${!pathnameToExcludeDivPlaceholder.includes(pathname) ? navigationBarHeight : 0}px`,
        }}
      />
    </>
  );
};
