import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// organism
import { Navigation } from "@/app/_components/organisms/Navigation";

import { OPENGRAPH_METADATA } from "@/app/_constants";

// export const dynamic = "force-dynamic";
// export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    default: "Home | SimHub",
    template: "%s | SimHub",
  },
  description: "Experience seamless global connectivity with SimHub.",
  openGraph: {
    ...OPENGRAPH_METADATA,
    title: "Login",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
