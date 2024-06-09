// organisms
import { UserSideNavigation } from "@/app/_components/organisms";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="full-width h-full bg-black">
      <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-[280px,1fr]">
        <UserSideNavigation />
        {children}
      </div>
    </div>
  );
}
