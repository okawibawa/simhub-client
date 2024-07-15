"use client";

import { useTransition } from "react";
import { useFormState } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/app/_components/organisms";
import { deleteCookie, getCookie } from "cookies-next";

// atoms
import { Anchor, Button, Typography } from "@/app/_components/atoms";
import { logoutUser } from "@/app/_actions/userActions";
import toast from "react-hot-toast";

export const UserSideNavigation = () => {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(logoutUser, {
    status: undefined,
    message: "",
  });

  const router = useRouter();
  const pathname = usePathname();
  const cookies = getCookie("user");
  const parsedUser = cookies && JSON.parse(cookies);

  const handleLogoutUser = (id: string) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("id", id);

        await formAction(formData);
      } catch (error) {
        console.error("Error logging out user:", error);
      }
    });
  };

  if (state.status === 200) {
    toast.success("You have been logged out successfully. Redirecting...", {
      duration: 1500,
    });

    deleteCookie("user");
    deleteCookie("usid");

    setTimeout(() => {
      router.replace("/");
    }, 2000);
  }

  return (
    <>
      <div className="h-fit text-white">
        <Typography as="subheading2" className="mb-10">
          Profile
        </Typography>

        <div className="flex flex-col">
          <Anchor
            href="/user/settings"
            className={`mb-4 border-l-2 px-4 py-2 pl-[14px] text-base font-medium text-zinc-700 hover:text-zinc-800 ${pathname === "/user/settings" ? "border-zinc-800 text-zinc-800" : "border-transparent"}`}
          >
            Account Settings
          </Anchor>
          <Anchor
            href="/user/password"
            className={`border-l-2 px-4 py-2 pl-[14px] text-base font-medium text-zinc-700 hover:text-zinc-800 ${pathname === "/user/password" ? "border-zinc-800 text-zinc-800" : "border-transparent"}`}
          >
            Password
          </Anchor>
        </div>

        <div className="my-4 h-[1px] w-full bg-zinc-700" />

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="tertiary"
              className="w-full text-left text-red-500 hover:bg-transparent"
            >
              Logout
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="mb-2">
                Are you absolutely sure?
              </DialogTitle>
              <DialogDescription>
                You will be logged out and have to login again to access your
                account.
              </DialogDescription>
              <div className="flex justify-end gap-2">
                {state.status !== 200 && !isPending && (
                  <DialogClose asChild>
                    <Button
                      variant="secondary"
                      className={`${isPending ? "text-zinc-50" : "text-zinc-800"} hover:bg-blue-400 hover:text-zinc-50`}
                      isLoading={isPending}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                )}

                <Button
                  variant="primary"
                  onClick={() => handleLogoutUser(parsedUser.id)}
                  isLoading={isPending || state.status === 200}
                >
                  Yes
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
