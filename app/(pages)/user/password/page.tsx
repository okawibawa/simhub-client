"use client";

import { useState } from "react";

// atoms
import { Typography, Input, Button } from "@/app/_components/atoms";

// organisms
import { PasswordRequirements } from "@/app/_components/organisms";

export default function UserPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="mt-[82px]">
      <section className="text-white">
        <div className="mb-6">
          <Typography as="body2" className="mb-2">
            Update Password
          </Typography>
          <Typography as="body5" className="text-zinc-500">
            Update your password here
          </Typography>
        </div>

        <PasswordRequirements password={password} />

        <form>
          <div className="mb-5">
            <label htmlFor="name">New Password</label>
            <Input
              id="name"
              placeholder="e.g. **********"
              type="password"
              className="mt-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">Confirm Password</label>
            <Input
              id="name"
              placeholder="e.g. **********"
              type="password"
              className="mt-3"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Button>Save Profile</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
