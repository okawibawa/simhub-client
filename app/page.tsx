"use client";

import { useState } from "react";
// atoms
import { ButtonTabs } from "./_components/atoms";

export default function Home() {
  const [active, setActive] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <ButtonTabs isActive={active === 1} onClick={() => setActive(1)}>
        Text Here
      </ButtonTabs>
      <ButtonTabs isActive={active === 2} onClick={() => setActive(2)}>
        Text Here
      </ButtonTabs>
      <ButtonTabs isActive={active === 3} onClick={() => setActive(3)}>
        Text Here
      </ButtonTabs>
    </main>
  );
}
