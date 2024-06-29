const loading = () => {
  return (
    <>
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
      <div className="my-6 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="relative flex h-[380px] animate-pulse flex-col gap-5 rounded-lg bg-zinc-900"
          ></div>
        ))}
      </div>
    </>
  );
};

export default loading;
