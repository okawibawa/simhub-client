import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconX, IconChevronDown } from "@tabler/icons-react";

// atoms
import { Anchor, Button } from "@/app/_components/atoms";

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
      className={`absolute z-10 h-dvh transform overflow-y-scroll bg-white px-5 py-[18px] transition-all duration-500 ${
        isMobileMenuOpen
          ? "opacity-1 inset-0 z-0 translate-x-0"
          : "inset-0 -z-10 translate-x-full opacity-0"
      }`}
    >
      <div className="mb-5 flex h-[42px] items-center justify-between">
        <Link href="/">
          <Image
            src="/simhub-logo-dark.svg"
            width={110}
            placeholder="blur"
            height={32}
            alt="logo"
            blurDataURL="/simhub-logo-dark.svg"
          />
        </Link>
        <IconX size={24} color="black" onClick={setIsMobileMenuOpen} />
      </div>

      <Button className="mb-2 w-full">Login</Button>

      <div className="divide-y divide-solid divide-zinc-200">
        <Anchor
          href="/#destination"
          className="mb-2 block py-4 text-zinc-900"
          size="lg"
        >
          Destination
        </Anchor>
        <Anchor
          href="/#how-it-works"
          className="mb-2 block py-4 text-zinc-900"
          size="lg"
        >
          How it Works
        </Anchor>
        <Anchor
          href="/#contact-us"
          className="mb-2 block py-4 text-zinc-900"
          size="lg"
        >
          Contact Us
        </Anchor>
        <button
          className="flex w-full items-center justify-between py-4 text-left text-base leading-[18px] text-zinc-900"
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
          className={`relative transform divide-y divide-solid divide-zinc-200 transition-all duration-200 ${
            isLanguageButtonOpen
              ? "opacity-1 top-0 z-0"
              : "-top-10 -z-10 opacity-0"
          }`}
        >
          <button className="w-full px-3 py-4 text-left text-base leading-[18px] text-zinc-900">
            English
          </button>
          <button className="w-full px-3 py-4 text-left text-base leading-[18px] text-zinc-900">
            Spanish
          </button>
        </div>
      </div>
    </div>
  );
};
