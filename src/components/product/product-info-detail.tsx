import { ProductApiDto } from "@/interface/productsApi.dto";
import ProductReview from "./product-reviews";

const ProductInfoDetail = ({ productData }: { productData: ProductApiDto }) => {
  return (
    <div className="flex-1 space-y-6">
      <div>
        <h1>{productData.title}</h1>
        <h5 className="font-thin text-gray-400">{productData.category}</h5>
        <div className="mt-4 space-x-4 divide-x-2">
          <small className="text-gray-400">sku: {productData.sku}</small>
          <small className="rounded-full bg-green-300 px-2 py-1">
            {productData.availabilityStatus}
          </small>
        </div>
      </div>

      <div className="mt-8">
        <p>{productData.description}</p>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <h3>${productData.price}</h3>
          <small className="px-2 text-sm text-green-600">
            -{productData.discountPercentage}% off
          </small>
        </div>
        <p className="text-sm text-gray-400 line-through">$700</p>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="space-x-1 *:size-8 [&_button]:rounded-lg [&_button]:border [&_button]:border-gray-300">
          <button className="hover:border-gray-500">+</button>
          <input type="number" className="bg-none text-center" />
          <button className="hover:border-gray-500">-</button>
        </div>
        <button className="rounded-lg bg-black px-4 py-2 text-lg text-white hover:opacity-80">
          add to cart
        </button>
      </div>
      <ProductReview reviews={productData.reviews} />
    </div>
  );
};

export default ProductInfoDetail;
