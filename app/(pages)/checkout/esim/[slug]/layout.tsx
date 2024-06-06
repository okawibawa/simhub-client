// utils
import { OPENGRAPH_METADATA } from "@/app/_constants";
import { capitalizeString } from "@/app/_utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `Checkout ${capitalizeString(params.slug)} eSIM Plan`,
    openGraph: {
      ...OPENGRAPH_METADATA,
      title: `Checkout ${capitalizeString(params.slug)} eSIM Plan`,
    },
  };
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
