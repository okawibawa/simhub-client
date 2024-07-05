import { cookies } from "next/headers";

// atoms
import { Button, Input, Typography } from "@/app/_components/atoms";
import { parse } from "path";

export default function UserSettings() {
  const cookis = cookies().get("user");
  const parsedCookies = cookis && JSON.parse(cookis.value);

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

        <form>
          <div className="mb-5">
            <label htmlFor="name" className="text-zinc-800">
              Name
            </label>
            <Input
              id="name"
              placeholder="Name"
              type="text"
              className="mt-3"
              defaultValue={parsedCookies?.username}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="text-zinc-800">
              Email
            </label>
            <Input
              placeholder="Email"
              type="email"
              className="mt-3"
              defaultValue={parsedCookies?.email}
            />
          </div>

          <div className="flex justify-end">
            <Button>Save Profile</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
