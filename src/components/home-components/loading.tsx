const LoadingPage = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full  md:max-w-[500px]  shadow-sm border-[1px]  items-center border-blue-500 rounded-md gap-3 p-3 my-1 py-7 ">
      <div className="animate-pulse min-w-20 aspect-square bg-gray-300 rounded-full" />
      <div className="flex flex-col gap-2 w-full">
        <div className="animate-pulse h-2 bg-gray-300 rounded-sm w-20"></div>
        <div className="animate-pulse h-4 bg-gray-300 rounded-sm w-40"></div>
        <div className="animate-pulse h-2 bg-gray-300 rounded-sm w-20"></div>
        <div className="animate-pulse h-2 bg-gray-300 rounded-sm w-20"></div>
        <div className="flex gap-3 flex-wrap flex-1">
          <div className="animate-pulse h-4 bg-gray-300 rounded-sm w-20 flex-1"></div>
          <div className="animate-pulse h-4 bg-gray-300 rounded-sm w-20 flex-1"></div>
          <div className="animate-pulse h-4 bg-gray-300 rounded-sm w-20 flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
