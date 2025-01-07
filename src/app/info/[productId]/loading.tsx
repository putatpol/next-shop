import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function LoadingProductInfo() {
  return (
    <div className="container mx-auto my-6 flex flex-col">
      <div className="flex items-start gap-10">
        {/* Back Button */}
        <button className="hover:scale-125">
          <FontAwesomeIcon icon={faArrowLeft} className="size-6" />
        </button>

        {/* Product Image Skeleton */}
        <div className="grid w-2/5 grid-cols-3 gap-2">
          <div className="col-span-3 h-[500px] w-full animate-pulse bg-gray-200" />
        </div>

        {/* Product Details Skeleton */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <div className="h-8 w-3/4 animate-pulse bg-gray-200" />
          <div className="h-4 w-1/4 animate-pulse bg-gray-200" />

          {/* SKU and Availability */}
          <div className="mt-4 space-x-4">
            <div className="inline-block h-4 w-1/3 animate-pulse bg-gray-200" />
            <div className="inline-block h-6 w-1/4 animate-pulse rounded-full bg-gray-300" />
          </div>

          {/* Description */}
          <div className="h-20 animate-pulse bg-gray-200" />

          {/* Price */}
          <div className="space-y-2">
            <div className="h-6 w-1/4 animate-pulse bg-gray-200" />
            <div className="h-4 w-1/6 animate-pulse bg-gray-300" />
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex space-x-2">
              <div className="h-10 w-10 animate-pulse rounded-lg bg-gray-200" />
              <div className="h-10 w-20 animate-pulse bg-gray-200" />
              <div className="h-10 w-10 animate-pulse rounded-lg bg-gray-200" />
            </div>
            <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-400" />
          </div>

          {/* Reviews Accordion */}
          <div className="mt-8 border-gray-400">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="flex space-x-1">
                    <div className="h-4 w-4 animate-pulse bg-gray-300" />
                  </div>
                  <div className="h-4 w-24 animate-pulse bg-gray-200" />
                </div>
                <div className="mt-2">
                  <div className="h-4 w-1/3 animate-pulse bg-gray-200" />
                  <div className="h-4 w-3/4 animate-pulse bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
