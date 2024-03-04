"use client";

// atoms
import { Button, Input, Anchor } from "./_components/atoms";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-800">
      <Anchor href="#">Internal Anchor</Anchor>
      <Anchor isExternal href="https://www.youtube.com/watch?v=sTcHbELHYCk">
        External Anchor
      </Anchor>
    </main>
  );
}
