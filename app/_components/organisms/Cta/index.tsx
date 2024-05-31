// atoms
import { Button, Typography } from "@/app/_components/atoms";
import { IconMessageChatbot } from "@tabler/icons-react";
import Image from "next/image";

export const Cta = () => {
  return (
    <section className="relative max-h-[440px] overflow-hidden">
      <div className="absolute bottom-0 -z-10 h-screen w-full">
        <Image
          src="/cta-background.jpg"
          alt="cta background"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-50"
          placeholder="blur"
          blurDataURL="/cta-background.jpg"
        />
      </div>

      <div className="full-width pb-[168px] pt-10 text-center">
        <Typography as="subheading1" className="mx-auto mb-8 max-w-[780px]">
          We are always ready to support you whenever and wherever you are
        </Typography>
        <Button className="mx-auto flex items-center gap-2">
          <IconMessageChatbot size={24} color="white" /> Customer Support
        </Button>
      </div>
    </section>
  );
};
