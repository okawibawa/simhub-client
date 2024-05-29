const Loading = () => {
  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex animate-pulse items-center gap-4 rounded-lg bg-zinc-900 px-5 py-4"
        >
          <span className="text-transparent">placeholder text.</span>
        </div>
      ))}
    </div>
  );
};

export default Loading;
