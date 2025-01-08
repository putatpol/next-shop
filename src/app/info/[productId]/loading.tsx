export default function LoadingProductInfo() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap items-start">
        {/* Product Image Skeleton */}
        <div className="basis-full space-y-4 lg:basis-2/5">
          <div className="animate-pulse h-6 w-24 rounded bg-gray-300"></div>
          <div className="animate-pulse h-80 w-full rounded bg-gray-300"></div>
          <div className="flex space-x-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse h-20 w-20 rounded bg-gray-300"
              ></div>
            ))}
          </div>
        </div>

        {/* Product Details Skeleton */}
        <div className="flex-1 space-y-6 p-3 md:p-5">
          <div>
            <div className="animate-pulse h-8 w-48 rounded bg-gray-300"></div>
            <div className="animate-pulse mt-2 h-4 w-32 rounded bg-gray-300"></div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="animate-pulse h-4 w-full rounded bg-gray-300"></div>
            <div className="animate-pulse h-4 w-3/4 rounded bg-gray-300"></div>
            <div className="animate-pulse h-4 w-1/2 rounded bg-gray-300"></div>
          </div>
          <div className="mt-8 space-y-2">
            <div className="animate-pulse h-6 w-32 rounded bg-gray-300"></div>
            <div className="animate-pulse h-4 w-16 rounded bg-gray-300"></div>
          </div>
          <div className="relative mt-8 flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="animate-pulse h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="animate-pulse h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="animate-pulse h-8 w-8 rounded-full bg-gray-300"></div>
            </div>
            <div className="animate-pulse h-10 w-40 rounded bg-gray-300"></div>
          </div>
          <div className="mt-10 space-y-4">
            <div className="animate-pulse h-4 w-full rounded bg-gray-300"></div>
            <div className="animate-pulse h-4 w-3/4 rounded bg-gray-300"></div>
            <div className="animate-pulse h-4 w-1/2 rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
