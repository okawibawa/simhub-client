import { ButtonTabs } from "@/app/_components/atoms";

const loading = () => {
  return (
    <div className="flex items-center space-x-5 overflow-scroll md:overflow-hidden">
      <div className="flex items-center gap-x-2">
        <div className="h-[42px] w-28 animate-pulse rounded-full bg-zinc-900" />
        <div className="h-[42px] w-28 animate-pulse rounded-full bg-zinc-900" />
      </div>

      <div className="h-8 w-[1px] animate-pulse bg-zinc-500" />

      <div className="flex items-center gap-x-2">
        <div className="h-[42px] w-28 animate-pulse rounded-full bg-zinc-900" />
        <div className="h-[42px] w-28 animate-pulse rounded-full bg-zinc-900" />
      </div>
    </div>
  );
};

export default loading;
