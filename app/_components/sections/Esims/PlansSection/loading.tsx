const loading = () => {
  return (
    <div className="my-6 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="relative flex h-[380px] animate-pulse flex-col gap-5 rounded-lg bg-zinc-900"
        ></div>
      ))}
    </div>
  );
};

export default loading;
