"use client";

// atoms
import { Typography } from "@/app/_components/atoms";

// organisms
import { UserUpdatePasswordForms } from "@/app/_components/organisms";

export default function UserPassword() {
  return (
    <main className="md:mt-[82px]">
      <section className="text-white">
        <div className="mb-6">
          <Typography as="body2" className="mb-2">
            Update Password
          </Typography>
          <Typography as="body5" className="text-zinc-500">
            Update your password here
          </Typography>
        </div>

        <UserUpdatePasswordForms />
      </section>
    </main>
  );
}
