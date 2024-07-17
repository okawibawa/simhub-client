"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import { IconLanguage, IconMenu2 } from "@tabler/icons-react";

// stores
import { useNavigationHeightStore } from "@/app/_stores";

// atoms
import { Anchor, Button, Select } from "@/app/_components/atoms";

import { NavigationMobile } from "./NavigationMobile";

export const Navigation = () => {
  const cookies = getCookie("usid");
  const { navigationBarHeight, setNavigationBarHeight } =
    useNavigationHeightStore();

  const [pastYMousePosition, setPastYMousePosition] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);

  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(cookies !== undefined);
    }, 1000);
  }, [cookies]);

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
            ? "bg-zinc-100/30 shadow-lg shadow-zinc-600/10 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="grid-content">
          <div className="flex items-center">
            <div className="flex-1">
              <Anchor href="/" className="inline-block w-fit">
                <Image
                  src="/simhub-logo-dark.svg"
                  width={110}
                  height={32}
                  alt="logo"
                  placeholder="blur"
                  blurDataURL="/simhub-logo-light.svg"
                />
              </Anchor>
            </div>

            <div className="hidden space-x-2 lg:block">
              <Anchor href="/#destination" className="px-3 text-zinc-800">
                Destination
              </Anchor>
              <Anchor href="/#how-it-works" className="px-3 text-zinc-800">
                How it Works
              </Anchor>
              <Anchor href="/#contact-us" className="px-3 text-zinc-800">
                Contact Us
              </Anchor>
            </div>

            <Select
              leftIcon={<IconLanguage />}
              onChange={(e) => console.log(e)}
              className="hidden text-zinc-800 lg:flex"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </Select>

            <div className="flex items-center space-x-4">
              {isLoggedIn === undefined ? (
                <>
                  <Link href="/login">
                    <Button className="w-[100px] animate-pulse bg-blue-500 text-transparent">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-[100px] animate-pulse bg-blue-500 text-transparent">
                      Register
                    </Button>
                  </Link>
                </>
              ) : isLoggedIn ? (
                <>
                  <Link href="#">
                    <Button
                      variant="secondary"
                      className="w-[100px] text-zinc-800 hover:bg-blue-400 hover:text-zinc-50"
                    >
                      My eSIMs
                    </Button>
                  </Link>

                  <Link href="/user/settings" className="hidden lg:block">
                    <Button className="w-[100px]">My Profile</Button>
                  </Link>

                  <IconMenu2
                    className="block lg:hidden"
                    size={24}
                    color="black"
                    onClick={handleIsMobileMenuOpen}
                  />
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="secondary"
                      className="hidden w-[100px] text-zinc-800 hover:bg-zinc-50/10 lg:block"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-[100px]">Register</Button>
                  </Link>
                  <IconMenu2
                    className="block lg:hidden"
                    size={24}
                    color="black"
                    onClick={handleIsMobileMenuOpen}
                  />
                </>
              )}
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
