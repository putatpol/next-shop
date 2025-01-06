export default function LoadingProductList() {
  return (
    <div>
      <div className="container mx-auto my-6 px-3 *:py-6 xl:px-0">
        <h2 className="text-center text-5xl font-thin">Collections</h2>
        <div className="flex justify-center gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-8 w-20 animate-pulse rounded-full bg-gray-300"
            ></div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-2">
              {/* Image */}
              <div className="h-60 w-full animate-pulse rounded bg-gray-300"></div>
              {/* Title */}
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300"></div>
              {/* Category */}
              <div className="h-3 w-1/2 animate-pulse rounded bg-gray-300"></div>
              {/* Price */}
              <div className="h-4 w-1/4 animate-pulse rounded bg-gray-300"></div>
              {/* Button */}
              <div className="h-8 w-8 animate-pulse self-end rounded-full bg-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
