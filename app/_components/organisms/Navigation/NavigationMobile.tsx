"use client";

import Image from "next/image";
import { IconX, IconChevronDown } from "@tabler/icons-react";

// atoms
import { Anchor, Button } from "@/app/_components/atoms";
import { useEffect, useState } from "react";

interface NavigationMobileProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: () => void;
}

export const NavigationMobile = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavigationMobileProps) => {
  const [isLanguageButtonOpen, setIsLanguageButtonOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsLanguageButtonOpen(false);
      return;
    }

    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleIsLanguageButtonOpen = () => {
    setIsLanguageButtonOpen((prev) => !prev);
  };

  return (
    <div
      className={`absolute bg-white h-dvh py-[18px] px-5 transform transition-all duration-500 z-10 ${
        isMobileMenuOpen
          ? "translate-x-0 opacity-1 z-0 inset-0"
          : "translate-x-full opacity-0 -z-10 inset-0"
      }`}
    >
      <div className="flex items-center justify-between mb-5 h-[42px]">
        <Image src="/simhub-logo-dark.svg" width={110} height={32} alt="logo" />
        <IconX size={24} color="black" onClick={setIsMobileMenuOpen} />
      </div>

      <Button className="w-full mb-2">Login</Button>

      <div className="divide-y divide-solid divide-zinc-200">
        <Anchor href="#" className="block mb-2 py-4 text-zinc-900" size="lg">
          Destination
        </Anchor>
        <Anchor href="#" className="block mb-2 py-4 text-zinc-900" size="lg">
          How it Works
        </Anchor>
        <Anchor href="#" className="block mb-2 py-4 text-zinc-900" size="lg">
          Contact Us
        </Anchor>
        <button
          className="w-full text-left py-4 text-zinc-900 leading-[18px] text-base flex items-center justify-between"
          onClick={handleIsLanguageButtonOpen}
        >
          Language
          <IconChevronDown
            size={20}
            className={`transform transition-all duration-200 ${
              isLanguageButtonOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`divide-y divide-solid divide-zinc-200 relative transform transition-all duration-200 ${
            isLanguageButtonOpen
              ? "top-0 opacity-1 z-0"
              : "-top-10 opacity-0 -z-10"
          }`}
        >
          <button className="w-full text-left py-4 text-zinc-900 leading-[18px] text-base px-3">
            English
          </button>
          <button className="w-full text-left py-4 text-zinc-900 leading-[18px] text-base px-3">
            Spanish
          </button>
        </div>
      </div>
    </div>
  );
};
