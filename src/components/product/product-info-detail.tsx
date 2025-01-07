import { ProductApiDto } from "@/interface/productsApi.dto";
import ProductReview from "./product-reviews";
import { ButtonAddCart } from "./product-info-btnCart";
import { Providers } from "@/app/providers";

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

      <Providers>
        <ButtonAddCart productData={productData} />
      </Providers>

      <ProductReview reviews={productData.reviews} />
    </div>
  );
};

export default ProductInfoDetail;
