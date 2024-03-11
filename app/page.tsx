"use client";

import { Button, Input } from "./_components/atoms";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <Input placeholder="Email" isError />
    </main>
  );
}
