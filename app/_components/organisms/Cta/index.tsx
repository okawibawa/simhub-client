// atoms
import { Button, Typography } from "@/app/_components/atoms";

export const Cta = () => {
  return (
    <section className="full-width bg-orange-200 pb-[168px] pt-10 text-center">
      <Typography as="subheading1" className="mx-auto mb-8 max-w-[780px]">
        Always ready to support you whenever and wherever you are
      </Typography>
      <Button className="mx-auto">Customer Support</Button>
    </section>
  );
};
