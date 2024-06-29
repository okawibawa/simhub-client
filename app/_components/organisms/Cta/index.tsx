// atoms
import { Button, Typography } from "@/app/_components/atoms";
import { IconMessageChatbot } from "@tabler/icons-react";
import Image from "next/image";

export const Cta = () => {
  return (
    <section className="grid-content relative" id="contact-us">
      {/* <div className="absolute bottom-0 -z-10 h-screen w-full">
        <Image
          src="/cta-background.jpg"
          alt="cta background"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-50"
          placeholder="blur"
          blurDataURL="/cta-background.jpg"
        />
      </div> */}

      <div className="relative my-24">
        <div className="z-10overflow-hidden relative rounded-lg border-2 border-white/40 bg-zinc-100/10 py-24 backdrop-blur-3xl">
          <Typography
            as="subheading1"
            className="mx-auto mb-8 max-w-[780px] text-center text-zinc-50"
          >
            We are always ready to support you whenever and wherever you are
          </Typography>
          <Button className="mx-auto flex items-center gap-2 text-zinc-50">
            <IconMessageChatbot size={24} color="white" /> Customer Support
          </Button>
        </div>

        <div className="absolute inset-0 -z-10 h-full w-full">
          <Image
            src="/cta-blob.png"
            alt="cta blob"
            fill
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
