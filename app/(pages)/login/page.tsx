import Image from "next/image";

import { Typography, Input, Anchor, Button } from "@/app/_components/atoms";
import Link from "next/link";

export default function Login() {
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
          <div className="w-full rounded-xl bg-black p-7">
            <Link href="/" className="inline-block">
              <Image
                src="/simhub-logo-light.svg"
                width={110}
                height={32}
                alt="logo"
                placeholder="blur"
                blurDataURL="/simhub-logo-light.svg"
                className="mb-7"
              />
            </Link>

            <Typography as="subheading2" className="mb-7">
              Login
            </Typography>

            <form className="mb-8 space-y-5">
              <Input placeholder="email" type="email" />
              <Input placeholder="password" type="password" />

              <div className="flex items-center justify-end">
                <Anchor href="#" className="text-zinc-400">
                  Forgot password?
                </Anchor>
              </div>

              <Button className="w-full" type="submit">
                Login
              </Button>
            </form>

            <div className="mb-8 h-[1px] w-full bg-zinc-600" />

            <Typography
              as="body7"
              className="text-center font-normal text-zinc-400"
            >
              Don&apos;t have an account?{" "}
              <Anchor href="/register" className="inline-block text-zinc-400">
                Sign up
              </Anchor>
            </Typography>
          </div>
        </div>
      </section>
    </main>
  );
}
