import { Metadata } from "next";

import { OPENGRAPH_METADATA } from "@/app/_constants";

export const metadata: Metadata = {
  title: "Esims",
  openGraph: {
    ...OPENGRAPH_METADATA,
    title: "Esims",
  },
};

export default function Esims() {
  return <div>Esims</div>;
}
