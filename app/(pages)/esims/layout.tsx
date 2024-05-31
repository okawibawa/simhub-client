import { ReactNode } from "react";

import { Footer } from "@/app/_components/organisms";

export default function EsimsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
