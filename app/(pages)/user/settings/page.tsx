// atoms
import { Typography } from "@/app/_components/atoms";

import { UserUpdateForms } from "@/app/_components/organisms";

export default function UserSettings() {
  return (
    <main className="md:mt-[82px]">
      <section className="text-white">
        <div className="mb-6">
          <Typography as="body2" className="mb-2">
            Account Setting
          </Typography>
          <Typography as="body5" className="text-zinc-500">
            Here you can change your account information
          </Typography>
        </div>

        <UserUpdateForms />
      </section>
    </main>
  );
}
