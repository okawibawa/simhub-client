import React from "react";

export default function Checkout({
  params,
}: {
  params: { slug: string; id: string };
}) {
  return (
    <main className="full-width bg-zinc-100 py-5">
      <section>
        Checkout {params.slug} {params.id}
      </section>
    </main>
  );
}
