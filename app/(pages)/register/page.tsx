import Image from "next/image";
import Link from "next/link";

import { Typography, Anchor } from "@/app/_components/atoms";

import { RegisterForms } from "@/app/_components/organisms";

export default function Register() {
  return (
    <main className="relative h-full w-full">
      <section className="full-width flex h-full items-center justify-center">
        <Image
          src="/auth-pages-bg.jpg"
          fill
          alt="auth-pages-bg"
          style={{ objectFit: "cover" }}
          className="-z-10 brightness-50"
        />

        <div className="mx-auto w-full max-w-[580px] rounded-xl bg-white/30 p-2 backdrop-blur-sm">
          <div className="w-full rounded-xl bg-zinc-100 p-7">
            <Link href="/" className="inline-block">
              <Image
                src="/simhub-logo-dark.svg"
                width={110}
                height={32}
                alt="logo"
                placeholder="blur"
                blurDataURL="/simhub-logo-light.svg"
                className="mb-7"
              />
            </Link>

            <Typography as="subheading2" className="mb-7">
              Register
            </Typography>

            <RegisterForms />

            <div className="mb-8 h-[1px] w-full bg-zinc-600" />

            <Typography
              as="body7"
              className="text-center font-normal text-zinc-400"
            >
              Already have an account?{" "}
              <Anchor href="/login" className="inline-block text-blue-500">
                Login
              </Anchor>
            </Typography>
          </div>
        </div>
      </section>
    </main>
  );
}
