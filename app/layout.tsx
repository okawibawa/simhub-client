import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

// organism
import { Navigation } from "@/app/_components/organisms/Navigation";

import { OPENGRAPH_METADATA } from "@/app/_constants";

const inter = Inter({ subsets: ["latin"] });

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
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
